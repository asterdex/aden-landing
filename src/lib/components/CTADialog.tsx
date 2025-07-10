import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function CTADialog() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center justify-center gap-2 h-12 md:h-[52px] px-6 py-2 bg-aden-primary rounded-[10px] shadow-[0px_1px_2px_0px_rgba(13,13,18,0.06)] flex-1 md:flex-initial hover:bg-aden-primary/90 transition-colors">
        Start Trading →
      </DialogTrigger>
      <DialogContent className="bg-black/90 border border-white/20 rounded-2xl p-6 md:p-8 w-full max-w-[400px]">
        <DialogHeader>
          <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#EDA320] to-[#F5C842] rounded-full flex items-center justify-center animate-pulse">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L12 12L22 12"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <DialogTitle className="text-white font-pretendard text-2xl md:text-3xl font-bold text-center">
            Start Trading
          </DialogTitle>

          <div className="text-center mb-6">
            <p
              className="text-white/80 font-pretendard text-base md:text-lg leading-relaxed"
              data-lang-ko="ADEN 거래 플랫폼이 곧 출시됩니다.<br>전 세계 최저의 수수료와 <br> 최고의 DEX 거래 경험을 준비하고 있습니다."
              data-lang-en="The ADEN trading platform is launching soon.<br>We're preparing the world's lowest fees and <br>the best DEX trading experience."
            >
              ADEN 거래 플랫폼이 곧 출시됩니다.
              <br />
              전 세계 최저의 수수료와 <br /> 최고의 DEX 거래 경험을 준비하고
              있습니다.
            </p>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
