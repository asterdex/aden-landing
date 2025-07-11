import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useTranslation } from "react-i18next";
import React from "react";

export default function CTADialog() {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger className="flex items-center justify-center gap-2 h-12 md:h-[52px] px-6 py-2 bg-aden-primary rounded-[10px] shadow-[0px_1px_2px_0px_rgba(13,13,18,0.06)] flex-1 md:flex-initial hover:bg-aden-primary/90 transition-colors">
        {t("modals.startTrading.title")} →
      </DialogTrigger>
      <DialogContent className="bg-black/90 border border-white/20 rounded-2xl p-6 md:p-8 w-full max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-white font-pretendard text-2xl md:text-3xl font-bold text-center">
            {t("modals.startTrading.title")}
          </DialogTitle>

          <a
            href="https://asterdex.github.io/trading-pro-sdk-example"
            className="mt-8 flex items-center justify-center gap-2 h-12 md:h-[52px] px-6 py-2 bg-aden-primary rounded-[10px] shadow-[0px_1px_2px_0px_rgba(13,13,18,0.06)] flex-1 md:flex-initial hover:bg-aden-primary/90 transition-colors"
          >
            {t("modals.startTrading.asterTradeNow")}
          </a>

          <a
            href="https://broker-template-seven.vercel.app/perp/PERP_ETH_USDC"
            className="mt-3 flex items-center justify-center gap-2 h-12 md:h-[52px] px-6 py-2 rounded-[10px] shadow-[0px_1px_2px_0px_rgba(13,13,18,0.06)] flex-1 md:flex-initial hover:bg-aden-primary/90 transition-colors"
          >
            {t("modals.startTrading.orderlyTradeNow")}
          </a>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
