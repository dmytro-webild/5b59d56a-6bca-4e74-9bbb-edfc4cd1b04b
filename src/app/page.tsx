"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSmall"
        background="noise"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "About", id: "about" },
        { name: "Moments", id: "features" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Johnny's Memories"
      button={{ text: "Share Memory", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{ variant: "plain" }}
      title="Celebrating Johnny's Childhood"
      description="A collection of beautiful memories, milestones, and joy shared with the ones who matter most."
      kpis={[
        { value: "10", label: "Years of Joy" },
        { value: "500", label: "Shared Moments" },
        { value: "12", label: "Favorite Places" }
      ]}
      enableKpiAnimation={true}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D134JxeJxCHeBeDYDV4jNgVFM4/uploaded-1777435713432-0881mdnl.jpg?_wi=1"
      imageAlt="Portrait of Johnny"
      mediaAnimation="slide-up"
      avatars={[
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D134JxeJxCHeBeDYDV4jNgVFM4/uploaded-1777435713432-0e807x84.jpg", alt: "Johnny playing" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D134JxeJxCHeBeDYDV4jNgVFM4/uploaded-1777435713432-300siks7.jpg", alt: "Johnny smiling" }
      ]}
      avatarText="Joined by many friends and family"
      marqueeItems={[
        { type: "text", text: "Pure Joy" },
        { type: "text", text: "Adventurous Spirit" },
        { type: "text", text: "Endless Curiosity" },
        { type: "text", text: "Always Learning" },
        { type: "text", text: "Heart of Gold" }
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "Our Little Legend" },
        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D134JxeJxCHeBeDYDV4jNgVFM4/uploaded-1777435713432-0e807x84.jpg", alt: "Johnny playing outdoors" }
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { id: "1", title: "Playtime Adventures", tags: ["Fun", "Play"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D134JxeJxCHeBeDYDV4jNgVFM4/uploaded-1777435713432-0881mdnl.jpg?_wi=2", imageAlt: "Johnny toy time" },
        { id: "2", title: "Outdoor Discoveries", tags: ["Nature", "Active"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D134JxeJxCHeBeDYDV4jNgVFM4/uploaded-1777435713432-0e807x84.jpg?_wi=1", imageAlt: "Johnny in park" },
        { id: "3", title: "Creative Moments", tags: ["Learning", "Growth"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D134JxeJxCHeBeDYDV4jNgVFM4/uploaded-1777435713432-300siks7.jpg?_wi=1", imageAlt: "Johnny learning something new" }
      ]}
      title="Favorite Memories"
      description="Every moment captured reflects Johnny's bright spirit and curious mind."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "100%", description: "Laughter shared daily" },
        { id: "m2", value: "50+", description: "New skills learned" },
        { id: "m3", value: "Unlimited", description: "Imagination growth" }
      ]}
      title="Milestones We Loved"
      description="Looking back at the progress and wonderful achievements along the way."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      team={[
        { id: "t1", name: "Mom", role: "Supporter", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D134JxeJxCHeBeDYDV4jNgVFM4/uploaded-1777435713432-0881mdnl.jpg?_wi=3" },
        { id: "t2", name: "Dad", role: "Role Model", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D134JxeJxCHeBeDYDV4jNgVFM4/uploaded-1777435713432-0e807x84.jpg?_wi=2" },
        { id: "t3", name: "Grandma", role: "Storyteller", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D134JxeJxCHeBeDYDV4jNgVFM4/uploaded-1777435713432-300siks7.jpg?_wi=2" }
      ]}
      title="The Circle of Support"
      description="The amazing family and friends who make Johnny's life so special."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Grandma Rose", date: "May 2024", title: "Heartwarming", quote: "Johnny is the light of our lives.", tag: "Family", avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D134JxeJxCHeBeDYDV4jNgVFM4/uploaded-1777435713432-0e807x84.jpg", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D134JxeJxCHeBeDYDV4jNgVFM4/uploaded-1777435713432-0881mdnl.jpg?_wi=4", imageAlt: "Johnny portrait" },
        { id: "2", name: "Father Mike", date: "April 2024", title: "Incredible", quote: "Every day is an adventure with him.", tag: "Parent", avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D134JxeJxCHeBeDYDV4jNgVFM4/uploaded-1777435713432-300siks7.jpg", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D134JxeJxCHeBeDYDV4jNgVFM4/uploaded-1777435713432-0e807x84.jpg?_wi=3", imageAlt: "Johnny portrait" }
      ]}
      title="Kind Words from Loved Ones"
      description="Heartfelt messages from those whose lives were touched by Johnny's charm."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        { id: "f1", title: "What are his favorite hobbies?", content: "Johnny loves playing outdoors and exploring new things." },
        { id: "f2", title: "How can I contribute?", content: "Share your favorite memory of him on our contact page!" }
      ]}
      title="FAQs About Johnny"
      description="Common questions about his journey, interests, and milestones."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Share Memories"
      title="Send a Message"
      description="Have a memory or photo to share? Get in touch and let us know your favorite story about Johnny."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D134JxeJxCHeBeDYDV4jNgVFM4/uploaded-1777435713432-0881mdnl.jpg?_wi=5"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Quick Links",          items: [
            { label: "About", href: "#about" },
            { label: "Moments", href: "#features" },
            { label: "Contact", href: "#contact" }
          ]
        }
      ]}
      bottomLeftText="© 2025 Johnny's Tribute"
      bottomRightText="Built with love"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}