import 'dotenv/config'
import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,

} from "@react-email/components";
import { mainFont } from '@/lib/fonts';

/**
 * 
 * @param children Children MUST be from type @react-email/components not reactNode
 */
export function TyeEmailTemplate({ title, footerText, sections, children }: { title: string, footerText?: string, sections: { bgColour?: string, sectionContent: React.ReactNode }[], children?: React.ReactNode }) {
  return <Html>
    <Head />
    <Preview>{title}</Preview>
    <Tailwind>
      <Body style={{ fontFamily: mainFont.style.fontFamily }} className='w-full max-w-[37.5em] bg-white flex flex-col'>
        <Container className='gifContainer grid place-items-center py-7' style={{}}>
          <Img src='https://storage.googleapis.com/buildwithtye/LogoAnimated.gif' />
        </Container>
        <Section className='grid place-items-center py-4 border-b-2'><Text className='font-[800] text-xl tracking-[-1px]'>{title}</Text></Section>
        <Container>
          <Container className='px-7 border-x-2'>
            {sections.map((section, index) => {
              return <Section key={section.sectionContent?.toString() + 'section'} className='p-8  flex flex-col items-center justify-start' style={{ backgroundColor: section.bgColour }}>{section.sectionContent}</Section>
            })}
          </Container>
          {footerText && <Section className='p-8 border-2 grid place-items-center'>{footerText}</Section>}
        </Container>
      </Body>
    </Tailwind>
  </Html>
}