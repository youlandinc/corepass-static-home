import LENDER_AVATAR_1 from '@/images/knowledge/testimonials/lender-1.png'
import LENDER_AVATAR_2 from '@/images/knowledge/testimonials/lender-2.png'
import LENDER_AVATAR_3 from '@/images/knowledge/testimonials/lender-3.png'
import LENDER_AVATAR_4 from '@/images/knowledge/testimonials/lender-4.png'
import LENDER_AVATAR_5 from '@/images/knowledge/testimonials/lender-5.png'
import LENDER_AVATAR_6 from '@/images/knowledge/testimonials/lender-6.png'

import CARD_IMAGE_1 from '@/images/knowledge/futureOfTeam/brand-1.png'
import CARD_IMAGE_2 from '@/images/knowledge/futureOfTeam/brand-3.png'
import CARD_IMAGE_3 from '@/images/knowledge/futureOfTeam/brand-2.png'
import CARD_IMAGE_4 from '@/images/knowledge/futureOfTeam/brand-4.png'

export const KNOWLEDGE_FUTURE_OF_TEAM = [
  {
    title: 'AI-Powered Search',
    list: [
      'Ask questions in plain English, like "What’s our pricing for X?"',
      'Get instant answers from docs, Slack, or PDFs — all in one place',
    ],
    img: CARD_IMAGE_1,
  },
  {
    title: 'Dynamic Vector Database ',
    list: [
      'Auto-ingests new files, notes, and conversations',
      'Continuously updates embeddings as your data changes',
    ],
    img: CARD_IMAGE_3,
  },
  {
    title: ' Context-Aware Research',
    list: [
      'AI summarizes and cross-references multiple sources for deeper insights',
      'Understand trends, risks, and opportunities in real time',
    ],
    img: CARD_IMAGE_2,
  },
  {
    title: 'Knowledge Graphs ',
    list: [
      'Visualize relationships between projects, people, and data points',
      'Spot patterns and dependencies instantly',
    ],
    img: CARD_IMAGE_4,
  },
]

export const KNOWLEDGE_BUILT_TEAMS = {
  list: [
    {
      title: 'Automated Updates',
      subtitle:
        'As teams upload new documents or data, the vector database refreshes automatically',
    },
    {
      title: 'Role-Based Access',
      subtitle:
        'Ensure sensitive data stays protected while enabling collaboration',
    },
    {
      title: 'Enterprise Integrations',
      subtitle:
        'Connect to CRMs, BI tools, data warehouses, and document systems',
    },
  ],
  single: {
    title: 'Analytics & Insights',
    subtitle:
      'Understand not just what your team knows, but how they learn. Monitor search behavior, highlight areas where knowledge is missing, and surface opportunities to accelerate decision-making with actionable insights.',
  },
}

export const KNOWLEDGE_FAQ = {
  subtitle:
    'Can’t find what you’re looking for? Email us at sales@Corepass.com and our team will be happy to help.',
  list: [
    [
      {
        q: 'What is KnowledgeOS?',
        a: 'KnowledgeOS is an AI-powered knowledge orchestration platform that unifies documents, conversations, and data into one intelligent system—helping teams find answers faster and make better decisions.',
      },
      {
        q: 'Is my data secure?',
        a: 'Absolutely. Enterprise-grade security, encryption, and role-based access controls are built in to ensure your sensitive data stays fully protected.',
      },
    ],
    [
      {
        q: 'How does it work?',
        a: 'KnowledgeOS ingests files, notes, and conversations from across your tools, continuously updates embeddings as your data changes, and applies AI to surface instant answers, insights, and connections.',
      },
      {
        q: 'Does KnowledgeOS replace my team’s research?',
        a: 'Not at all. KnowledgeOS accelerates research by summarizing, cross-referencing, and surfacing insights instantly—so your team can focus on higher-level thinking and strategy.',
      },
    ],
    [
      {
        q: 'Can it integrate with my existing tools?',
        a: 'Yes. KnowledgeOS connects with CRMs, BI tools, data warehouses, and document systems—so your team never has to switch between platforms to find what they need.',
      },
    ],
  ],
}

export const KNOWLEDGE_TESTIMONIALS = {
  title: 'Trusted Across Startups and Enterprises',
  subtitle:
    'From fast-growing startups to global enterprises, KnowledgeOS helps teams find answers faster, connect systems seamlessly, and uncover insights instantly.',
  list: [
    {
      content:
        'We replaced three disconnected knowledge tools with KnowledgeOS and cut research time in half.',
      auth: 'James Walker',
      title: 'VP Sales, FinTechCo',
      avatar: LENDER_AVATAR_1,
    },
    {
      content:
        'The AI assistant surfaces insights I used to spend hours digging through Slack and docs to find.',
      auth: 'Benjamin Hayes',
      title: 'Head of Sales, SaaSly',
      avatar: LENDER_AVATAR_2,
    },
    {
      content:
        'KnowledgeOS became our intelligence hub overnight — we finally have a single source of truth.',
      auth: 'Ava Mitchell',
      title: 'Founder, GrowthWave',
      avatar: LENDER_AVATAR_3,
    },
    {
      content:
        'We can now see knowledge gaps, measure adoption, and actually act on insights in real time.',
      auth: 'Chloe Bennett',
      title: 'Managing Director, Atlas Private Lending',
      avatar: LENDER_AVATAR_4,
    },
    {
      content:
        'KnowledgeOS gave us instant access to past decisions and context. Team alignment meetings are now shorter and more focused.',
      auth: 'Christopher Allen',
      title: 'Product Lead, NovaTech',
      avatar: LENDER_AVATAR_5,
    },
    {
      content:
        'We wasted time looking for the latest versions of docs. Now everyone works from the same source and errors have dropped dramatically.',
      auth: 'Isabella Rogers',
      title: 'Engineering Manager, Altura Systems',
      avatar: LENDER_AVATAR_6,
    },
  ],
}
