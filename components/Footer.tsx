import { footerLinks } from '@/constants'
import Image from 'next/image'
import React from 'react'

type ColumnProps = {
    title: string;
    links: Array<string>;
}

const FooterColumn = ({ title, links }: ColumnProps) => {
    return (
        <>
        <div className="flex-1 flex flex-col gap-3 text-sm min-w-max">
            <h4 className="font-semibold">{title}</h4>
            <ul className="flex gap-2 font-normal flex-col">
                {links.map(link => (
                    <li key={link}>{link}</li>
                ))}
            </ul>
        </div>
    </>
    );
}

export default function Footer() {
  return (
      <footer className="flex items-center justify-start m-2">
          <div className="flex flex-col gap-12 w-full">
              <div className="flex items-start flex-col">
                  <Image
                      src="/logo-purple.svg"
                      height={38}
                      width={115}
                      alt="flexibble"
                  />
                  <p className="text-start text-sm font-normal mt-5 max-w-xs">
                      Flexibble is the world's leading community for the creatives
                      to share, grow and get hired.
                  </p>
                  <div className="flex-1 flex flex-wrap gap-12 mt-5">
                      <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />
                      <div className="flex-1 flex flex-col gap-4">
                        <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
                      </div>
                      <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
                      <div className="flex-1 flex flex-col gap-4">
                        <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />
                      </div>
                      <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
                      <div className="flex-1 flex flex-col gap-4">
                        <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
                      </div>
                      <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
                  </div>
              </div>   

              <div className="flex justify-between items-center">
                  <p>@ 2023 Flexibble by Johnny Antiojo. All rights reserved</p>
                  <p className="text-gray">
                      <span className="text-black font-semibold">
                          10,214
                      </span>
                      Projects submitted
                  </p>
              </div>
          </div>
      </footer>
  )
}
