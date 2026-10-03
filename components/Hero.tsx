import Image from "next/image";
import Link from "next/link";
import { problems, solutions } from "@/constants";
import Problem from "./problem";
import Solution from "./Solution";
import PunchLine from "./PunchLine";

export default function ComingSoon() {


  return (
    <>
      <div className="flex flex-col items-center justify-center text-center mt-10 mb-10 min-h-[60vh] px-4">
                <h1 className="text-xl sm:text-2xl lg:text-6xl font-bold text-purple-300 drop-shadow-[0_0_16px_#a78bfa]">
                  Practice mock interviews With AI Powered Voice Assistant.
                </h1>
              <p className="text-xl text-white leading-relaxed mb-8 mt-5 max-w-3xl w-full">
                The voice-driven SAAS where you can generate a personalized mock interview. Get ready for the future of interview preparation. AI-powered Interview practice platform where you receive instant feedback to help you land your dream job.
              </p>

        </div>
        <Problem />
        <Solution />
        <PunchLine />
    </>
  );
}