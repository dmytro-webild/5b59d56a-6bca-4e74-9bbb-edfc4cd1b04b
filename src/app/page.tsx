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
      imageSrc="http://img.b2bpic.net/free-photo/close-up-cheerful-child-with-knit-cap-life-jacket_23-2147562084.jpg"
      imageAlt="young boy smiling portrait warm"
      mediaAnimation="slide-up"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-kid-wearing-headphones_23-2149141886.jpg", alt: "Medium shot smiley kid wearing headphones" },
        { src: "http://img.b2bpic.net/free-photo/young-boy-wearing-sweater-with-heart-shapes_23-2150824982.jpg", alt: "Young boy wearing sweater with heart shapes" },
        { src: "http://img.b2bpic.net/free-photo/boy-scout-members-having-fun-nature_52683-90490.jpg", alt: "Boy scout members having fun in nature" },
        { src: "http://img.b2bpic.net/free-photo/close-up-smiley-kid-outdoors_23-2149049224.jpg", alt: "Close up smiley kid outdoors" },
        { src: "http://img.b2bpic.net/free-photo/father-his-little-son-playing-together-park_171337-16358.jpg", alt: "Father and his little son playing together in a park" }
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
        { type: "image", src: "http://img.b2bpic.net/free-photo/high-angle-grandpa-taking-photo-grandson_23-2148294938.jpg", alt: "boy playing outdoors childhood" }
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { id: "1", title: "Playtime Adventures", tags: ["Fun", "Play"], imageSrc: "http://img.b2bpic.net/free-photo/colorful-wooden-toy-plant-arrangement_23-2149357207.jpg", imageAlt: "childhood toys on shelf" },
        { id: "2", title: "Outdoor Discoveries", tags: ["Nature", "Active"], imageSrc: "http://img.b2bpic.net/free-photo/scrupulous-superwoman-ready-save-world-from-dirt-cleans-toilet-with-brush-looks-attentively-through-goggles-has-dirty-face-dressed-superhero-costume-isolated-pink-wall_273609-50617.jpg", imageAlt: "boy running in park" },
        { id: "3", title: "School Days", tags: ["Learning", "Growth"], imageSrc: "http://img.b2bpic.net/free-photo/high-angle-kid-cheating-school_23-2150256555.jpg", imageAlt: "child learning something new" }
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
        { id: "t1", name: "Mom", role: "Supporter", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-family-hanging-out-jetty_52683-119020.jpg" },
        { id: "t2", name: "Dad", role: "Role Model", imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-family-with-little-daughter_171337-7338.jpg" },
        { id: "t3", name: "Grandma", role: "Storyteller", imageSrc: "http://img.b2bpic.net/free-photo/close-up-shot-senior-grey-haired-european-woman-smiles-broadly-applies-bright-makeup-shows-her-perfect-whit-teeth-celebrates-birthday_273609-50080.jpg" }
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
        { id: "1", name: "Grandma Rose", date: "May 2024", title: "Heartwarming", quote: "Johnny is the light of our lives.", tag: "Family", avatarSrc: "http://img.b2bpic.net/free-photo/senior-woman-with-pigtails-dressed-blue-blouse_273609-5746.jpg", imageSrc: "http://img.b2bpic.net/free-photo/close-up-cheerful-child-with-knit-cap-life-jacket_23-2147562084.jpg", imageAlt: "happy grandmother portrait smile" },
        { id: "2", name: "Father Mike", date: "April 2024", title: "Incredible", quote: "Every day is an adventure with him.", tag: "Parent", avatarSrc: "http://img.b2bpic.net/free-photo/father-spending-time-with-his-child_23-2149238806.jpg", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-grandpa-taking-photo-grandson_23-2148294938.jpg", imageAlt: "happy grandmother portrait smile" },
        { id: "3", name: "Sarah Miller", date: "March 2024", title: "So Kind", quote: "I love his endless imagination.", tag: "Friend", avatarSrc: "http://img.b2bpic.net/free-photo/close-up-baby-hands-mother-hands_23-2149294609.jpg", imageSrc: "http://img.b2bpic.net/free-photo/colorful-wooden-toy-plant-arrangement_23-2149357207.jpg", imageAlt: "happy grandmother portrait smile" },
        { id: "4", name: "Ben Lee", date: "Feb 2024", title: "Bright Spirit", quote: "A truly wonderful child to know.", tag: "Peer", avatarSrc: "http://img.b2bpic.net/free-photo/best-friends_329181-7516.jpg", imageSrc: "http://img.b2bpic.net/free-photo/scrupulous-superwoman-ready-save-world-from-dirt-cleans-toilet-with-brush-looks-attentively-through-goggles-has-dirty-face-dressed-superhero-costume-isolated-pink-wall_273609-50617.jpg", imageAlt: "happy grandmother portrait smile" },
        { id: "5", name: "Teacher Jane", date: "Jan 2024", title: "Smart", quote: "Johnny is exceptionally bright.", tag: "Teacher", avatarSrc: "http://img.b2bpic.net/free-photo/teacher-with-glasses-class_23-2148665899.jpg", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-kid-cheating-school_23-2150256555.jpg", imageAlt: "happy grandmother portrait smile" }
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
        { id: "f1", title: "What are his favorite hobbies?", content: "Johnny loves playing outdoors and building with blocks." },
        { id: "f2", title: "How does he enjoy school?", content: "He enjoys science and being with his friends." },
        { id: "f3", title: "How can I contribute?", content: "Share your favorite memory of him on our contact page!" }
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
      imageSrc="http://img.b2bpic.net/free-photo/portrait-young-man-with-make-up-posing_23-2148931643.jpg"
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
        },
        {
          title: "Legal",          items: [
            { label: "Privacy Policy", href: "#" }
          ]
        }
      ]}
      bottomLeftText="© 2024 Johnny's Tribute"
      bottomRightText="Built with love"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}