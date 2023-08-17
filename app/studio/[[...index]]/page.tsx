'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return (
  <>
    <section className="pt-[150px] pb-[120px] w-full">
      <div className="mx-auto">
        <div className="flex justify-center">
          <div className="w-full lg:w-8/12">
            <NextStudio config={config} />
          </div>
        </div>
      </div>
    </section>
  </>
)}