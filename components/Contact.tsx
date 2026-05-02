"use client";

import React from 'react';
import BookCall from './BookCall';
import { useLanguage } from '@/contexts/LanguageContext';
import { Coffee, Lightbulb, Phone, Rocket } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage()
  return (
    <div className="my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-lg overflow-hidden portfolio-card">
        <div className="p-8 flex flex-col justify-center">
          <div className="mb-6">
            <p className="accent-text text-sm mb-1 font-semibold tracking-wider uppercase">{t('contact.letsConnect')}</p>
            <h2 className="text-2xl md:text-3xl text-[var(--text-primary)] font-medium mb-2">
              {t('contact.readyToTransform')}&nbsp;
              <span className="italic accent-text">{t('contact.reality')}</span>?
            </h2>
          </div>

          <div className="space-y-8 mt-4">
            <div>
              <p className="text-[var(--text-primary)] font-semibold mb-2 flex items-center gap-2">
                <Lightbulb className="h-4 w-4" /> {t('contact.gotIdea')}
              </p>
              <p className="text-soft">
                {t('contact.gotIdeaDesc')}
              </p>
            </div>

            <div>
              <p className="text-[var(--text-primary)] font-semibold mb-2 flex items-center gap-2">
                <Rocket className="h-4 w-4" /> {t('contact.scalingUp')}
              </p>
              <p className="text-soft">
                {t('contact.scalingUpDesc')}
              </p>
            </div>

            <div>
              <p className="text-[var(--text-primary)] font-semibold mb-2 flex items-center gap-2">
                <Coffee className="h-4 w-4" /> {t('contact.basedInKashmir')}
              </p>
              <p className="text-soft">
                {t('contact.basedInKashmirDesc')}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[var(--surface-muted)] p-8 flex flex-col items-center justify-center">
          <div className="max-w-md mx-auto w-full flex flex-col items-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-[var(--surface)] p-1.5">
                <div className="w-full h-full rounded-full border-2 border-dashed accent-border p-1 flex items-center justify-center animate-pulse">
                  <Phone className="h-7 w-7 accent-text" />
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl text-[var(--text-primary)] font-semibold mb-3">{t('contact.letsMakeItHappen')}</h3>
              <p className="text-soft mb-6">
                  {t('contact.bookSession')}
              </p>

              <div className="flex justify-center gap-2 mb-6">
                <span className="inline-flex h-2 w-2 rounded-full bg-[var(--brand)]" />
                <span className="inline-flex h-2 w-2 rounded-full bg-[var(--text-muted)]" />
                <span className="inline-flex h-2 w-2 rounded-full bg-[var(--line-strong)]" />
              </div>
            </div>

            <div className="mx-auto">
              <BookCall />
            </div>

            <div className="mt-8 border-t border-[var(--line)] pt-6 w-full">
              <p className="text-center text-muted-theme text-sm mt-5 italic">
                &quot;{t('contact.quote')}&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
