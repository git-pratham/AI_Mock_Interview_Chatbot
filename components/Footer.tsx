"use client";

const Footer = () => {
    return (
        <>
            <footer className="">
                <div className="h-[7rem] pt-4 pb-3 mb-20 flex flex-col judtify-center space-y-5 items-center " >
                    <div className="text-white-500 mt-2 flex gap-2 ">
                    <p>Terms & Conditions</p>
                    <span>|</span>
                    <p>Privacy Policy</p>
                    </div>
                <div className="flex gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20 shadow-[0_0_20px_5px_rgba(255,255,255,0.3)]">
                    <p className="text-white text-lg font-semibold">Made by Prathamesh Misar ❤️</p>
                    <div className="social-icon">
                        <a href="https://github.com/CodeLander07" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/github.svg" alt="github" className="w-8 h-8" />
                        </a>
                    </div>

                    <div className="social-icon">
                        <a href="https://www.instagram.com/mayurnikumbh07/" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/instagram.svg" alt="instagram" className="w-8 h-8"  />
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/mayur-nikumbh/" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/linkedin.svg" alt="linkedin" className="w-8 h-8"  />
                        </a>
                    </div>
                </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
