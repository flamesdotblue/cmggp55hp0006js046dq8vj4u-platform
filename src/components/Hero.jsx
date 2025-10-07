import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(2,6,23,0.9)_65%,rgba(2,6,23,1)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[70vh] md:min-h-[80vh] items-center">
          <div className="w-full text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              Legal-grade, multilingual Arbeitszeugnisse
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Create trusted reference letters in minutes with ZertAI
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-300">
              An AI-powered assistant trained on the legal nuances of DE · FR · IT · EN labor laws. Transparent. Efficient. Built for HR teams in the DACH region.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-5 py-3 text-sm font-semibold shadow-sm hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start free — no credit card
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
              >
                See how it works
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
