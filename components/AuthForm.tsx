"use client"

import Link from "next/link"
import {toast } from 'sonner'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {Form} from "@/components/ui/form"
import FormField from "@/components/FormField"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import  {auth} from "@/firebase/client"
import { signUp ,signIn} from "@/lib/actions/auth.action"


//form Schema
const authFormSchema = (type: FormType) =>{
    return z.object({
        name: type === "sign-up" ? z.string().min(2).max(50) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(6).max(50),
    })
}
const AuthForm = ({type}:{type : FormType}) => {
    const formSchema = authFormSchema(type);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: "",
        email: "",
        password: "",
    },
  })
 

  async function onSubmit(values: z.infer<typeof formSchema>) {
    
    //sign up
    try {
        if (type === "sign-up") {
            const { name, email, password } = values;

            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const result = await signUp({
                uid: userCredentials.user.uid,
                name: name!,
                email,
                password
            })
            if(!result?.success) {
                toast.error(" Account was already exist " +result?.message);
                return;}
            toast.success("Account created successfully!");
            router.push("/sign-in");
        } 
        //sign in
        else {
            const { email, password } = values;
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            const idToken = await userCredentials.user.getIdToken();
            if (!idToken) {
                toast.error("Invalid credentials");
                return;
            }
            await signIn({
                email,
                idToken
            })
            toast.success("Sign in successful!");
            router.push("/");
        }
    } catch (error) {
        console.error("Error submitting form:");
        toast.error(`There was an error ${error}`);
    }
  }
 const isSignIn = type === "sign-in"


  return (
    <div className="card-border lg:min-w-[566px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            <h2 className="text-primary-100">PrepMaster</h2>
        </div>
        <h3 className="text-center">Practice your job interview with an ai simulated interview</h3>
        
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
       {!isSignIn && (
        <FormField 
        control={form.control} 
        name="name" 
        label="Name" 
        placeholder="Your Name" 
        /> 
        ) }
        <FormField 
        control={form.control} 
        name="email" 
        label="Email" 
        placeholder="Enter your email"
        type="email"
        />
        <FormField 
        control={form.control} 
        name="password" 
        label="Password" 
        placeholder="Enter your password"
        type="password" 
        />  

        <button className="btn" type = "submit"> {isSignIn ? "Sign In" : "Create an accont"}</button>
      </form>
    </Form>
    <p className="text-center"> {isSignIn ? "Don't have an account?" : "Already have an account?"} <Link className="font-bold text-user-primary ml-1" href={isSignIn ? "/sign-up" : "/sign-in"} >
    {!isSignIn ? "Sign In" : "Sign Up"}
    </ Link>
    </p>
    </div>
    </div>
  )
}

export default AuthForm
