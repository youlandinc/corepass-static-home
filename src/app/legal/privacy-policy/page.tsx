import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import type { Metadata } from 'next'
import BG_IMG from '@/images/home/footer/home-footer.svg'
import { Button } from '@/components/Button'
import { LOGIN_URL } from '@/constant'

export const metadata: Metadata = {
  title: 'Privacy Policy ',

  description:
    'Corepass is an all-in-one loan-origination platform that helps private and hard-money lenders close deals faster, cut costs, and scale without adding staff.',
}

export default function Home() {
  return (
    <>
      <Header className={'bg-[#F8F9FC]'} />
      <main>
        <Banner>
          <h1 className={'text-center text-2xl font-medium lg:text-3xl'}>
            Privacy Policy
          </h1>
          <div
            className={
              'mt-1.5 text-center text-[16px] text-[#9095A3] lg:mt-3 lg:text-xl'
            }
          >
            Last updated: April 24, 2025
          </div>
        </Banner>
        <div className={'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:py-20'}>
          <div className={'bg-[#F8F9FC] p-[24px]'}>
            Corepass, Inc. (“Corepass,” “we,” “us,” or “our”) is a software
            development company focused on providing an integrated origination
            platform for lenders. We are committed to protecting your privacy
            and the security of your personal information. This Privacy Policy
            describes how we collect, use, share, and protect information in the
            course of providing our Site and Services. This policy applies to
            all Corepass products, websites, and services (collectively, the
            “Services”). We comply with applicable privacy laws, including the
            General Data Protection Regulation (“GDPR”) and the California
            Consumer Privacy Act (“CCPA”). We may update this policy from time
            to time; the date at the top indicates the last revision. If we make
            material changes, we will notify you (for example, via email or a
            notice on our Site) before the changes take effect.
          </div>
          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>Introduction</h2>
            <p className={'mt-3'}>
              Corepass collects and processes information about you and your use
              of our Services to enable identity verification, secure account
              access, and to provide you with support and personalized features.
              We collect information that you provide to us directly, and
              information that we or our partners obtain automatically when you
              use our Services. We use this information to deliver, maintain,
              and improve our Services, to communicate with you, and to comply
              with legal obligations. Your trust is important to us, and we
              strive to handle your information responsibly and transparently.
            </p>
          </div>
          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>
              What Information Corepass Collects
            </h2>
            <p className={'mt-3'}>
              We collect various categories of information, both when you
              provide it directly and through automated means. The types of
              information we collect include:
            </p>
            <ul className={'mt-3 list-disc pl-6'}>
              <li>
                Identity and Contact Information: Name, email address, postal
                address, phone number, date of birth, and any other information
                you provide for account setup or identity verification.
              </li>
              <li>
                Government ID and Verification Data: Scans or details from
                government-issued identity documents (e.g., driver’s license,
                passport) that you submit for identity verification or
                compliance purposes, as well as verification results (such as
                facial recognition checks).
              </li>
              <li>
                Account Credentials and Profile: Username, password (securely
                hashed), profile photo, and other account settings or
                preferences.
              </li>
              <li>
                Payment and Billing Information: If you use paid features, we
                may collect payment card details, billing address, and
                transaction history, handled securely via third-party payment
                processors.
              </li>
              <li>
                Device and Technical Data: Information about the devices and
                technology you use to access our Services, including IP address,
                device type, operating system, browser type, unique device
                identifiers, and mobile carrier.
              </li>
              <li>
                Usage and Activity Data: Logs of your interactions with our
                Services (such as login dates/times, pages or features accessed,
                search queries, and other usage metrics), crash reports,
                performance data, and application usage statistics.
              </li>
              <li>
                Location Data: General location information inferred from your
                IP address or device settings.
              </li>
              <li>
                Communications Data: Records of communications with us (for
                example, support requests, emails, or other correspondence).
              </li>
              <li>
                Cookies and Tracking Technologies: We and our service providers
                use cookies, web beacons, and similar technologies to collect
                usage data and remember your preferences. You can control or
                disable cookies through your browser settings, but some features
                of the Services may not function properly without them.
              </li>
            </ul>
            <p className={'mt-3'}>
              We may combine information we collect from you with information
              from other sources, such as publicly available databases or
              third-party identity verification partners, to help verify your
              identity and prevent fraud.
            </p>
          </div>
          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>
              How Corepass Uses Collected Information
            </h2>
            <p className={'mt-3'}>
              Corepass uses the information we collect for a variety of purposes
              necessary to provide and improve our Services, including:
            </p>
            <ul className={'mt-3 list-disc pl-6'}>
              <li>
                Providing and Managing Services: To process your identity
                verification, authenticate and secure your account access, set
                up and manage your Corepass account and personal data vault, and
                fulfill any transactions or requests you make.
              </li>
              <li>
                Account Administration: To communicate with you about your
                account, respond to your requests (such as password resets or
                support inquiries), and notify you about changes to our Services
                or policies.
              </li>
              <li>
                Personalization: To customize your experience on our platform,
                such as by remembering your preferences or sending you relevant
                alerts and recommendations (with your consent where required).
              </li>
              <li>
                Analytics and Improvement: To analyze how our Services are used
                (for example, which features are popular or which pages are most
                visited) in order to improve our technology, develop new
                features, and optimize the user experience.
              </li>
              <li>
                Security and Fraud Prevention: To detect, prevent, and respond
                to security incidents, unauthorized access, or fraudulent
                activities. This includes monitoring for suspicious behavior,
                investigating potential violations of our policies, and ensuring
                the integrity of our systems.
              </li>
              <li>
                Legal and Regulatory Compliance: To comply with applicable laws,
                regulations, and lawful requests by public authorities (such as
                to meet tax, reporting, or audit requirements).
              </li>
              <li>
                Communications and Marketing: To send you transactional
                communications related to the Service (for example,
                confirmations, invoices, and security alerts). We may also send
                you marketing and promotional materials (such as newsletters,
                offers, or updates) if you have consented or have not opted out.
                You may opt out of marketing communications at any time (see the
                Your Rights and Choices section below).
              </li>
              <li>
                Business Operations: To perform internal business functions
                necessary to operate our company (including accounting, billing,
                and corporate reporting), to maintain our records, and to
                enforce our Terms of Service.
              </li>
              <li>
                Other Purposes: For any other purpose to which you consent or
                that is required or permitted by law.
              </li>
            </ul>
            <p className={'mt-3'}>
              We use your information only for purposes that are compatible with
              the reasons it was collected. When required by law (for example
              under the GDPR), we rely on lawful bases such as your consent, the
              performance of a contract (e.g. to provide the Services to you),
              compliance with a legal obligation, and our legitimate business
              interests (such as securing our platform, managing our business
              relationship, or pursuing quality improvement).
            </p>
          </div>
          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>
              How Corepass Shares Information
            </h2>
            <p className={'mt-3'}>
              Corepass does not sell your personal information to third parties.
              We share the information we collect only as described in this
              policy, including with the following categories of recipients:
            </p>
            <ul className={'mt-3 list-disc pl-6'}>
              <li>
                Service Providers: We use third-party companies and individuals
                to help provide our Services and operate our business (for
                example, cloud hosting providers, identity verification vendors,
                data analytics services, payment processors, email delivery
                services, and customer support platforms). These service
                providers receive only the information necessary to perform
                their functions and are contractually obligated to protect your
                data in accordance with our policies.
              </li>
              <li>
                Affiliates and Subsidiaries: We may share your information with
                our parent company, subsidiaries, or affiliated companies under
                the Corepass corporate family for purposes consistent with this
                Privacy Policy (for example, for providing customer support or
                marketing within the group).
              </li>
              <li>
                Business Partners: With your consent or direction, we may share
                data with trusted business partners if you use a co-branded or
                integrated service (for example, identity partners or apps that
                integrate with Corepass). We will explicitly notify you if a
                particular sharing requires your consent.
              </li>
              <li>
                Aggregated or De-identified Data: We may share aggregated or
                anonymized information that does not identify any individual for
                research or marketing purposes. Such data does not constitute
                personal information.
              </li>
              <li>
                Law Enforcement and Legal Requests: We may disclose your
                information if we believe it is reasonably necessary to comply
                with a law, regulation, or legal request (such as a court order
                or subpoena). We may also disclose information to protect our
                rights, privacy, safety, or property, or that of our users or
                the public, and to enforce our agreements.
              </li>
              <li>
                Corporate Transactions: In the event that Corepass is involved
                in a merger, acquisition, bankruptcy, or sale of some or all of
                its assets, your personal information may be transferred to the
                acquiring company or successor. We will require any successor to
                uphold the commitments we made in this Privacy Policy.
              </li>
            </ul>
            <p className={'mt-3'}>
              When we share information with third parties as described above,
              we take steps to ensure that your information remains secure and
              is handled according to the terms of this Privacy Policy or
              stricter terms. For example, we require our service providers and
              partners to implement reasonable data protection measures and not
              to use personal information for any purpose other than providing
              services to Corepass.
            </p>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>Data Retention</h2>
            <p className={'mt-3'}>
              We retain the personal information we collect for as long as
              necessary to fulfill the purposes outlined in this Privacy Policy,
              unless a longer retention period is required or permitted by law.
              The specific retention period depends on the type of information
              and the purpose for which it is used. For example:
            </p>
            <ul className={'mt-3 list-disc pl-6'}>
              <li>
                Account Information: We retain your account data for as long as
                your account is active or as needed to provide you Services.
                After you close your account, we may keep certain information
                for a period of time to comply with legal or regulatory
                obligations, to prevent fraud or abuse, or to resolve disputes.
              </li>
              <li>
                Transactional and Billing Data: We retain billing and payment
                information in accordance with financial and tax regulations
                (typically several years).
              </li>
              <li>
                Logs and Usage Data: We may keep logs, analytics, and other
                usage data for a limited time (for example, 12-24 months) to
                maintain the security and proper functioning of our systems and
                to analyze performance. This data is often retained in an
                aggregated or anonymized form.
              </li>
              <li>
                User Communications: We may keep records of communications with
                you (such as support tickets or emails) for as long as necessary
                to handle your requests and support issues.
              </li>
            </ul>
            <p className={'mt-3'}>
              When data is no longer needed, we will either delete it or
              anonymize it so that it can no longer be associated with you.
              Please note that even after deletion, copies of your information
              may remain in our backup archives for a certain period.
            </p>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>
              Your Rights and Choices
            </h2>
            <p className={'mt-3'}>
              You have choices and rights regarding the personal information we
              hold about you. Depending on where you live, these may include:
            </p>
            <ul className={'mt-3 list-disc pl-6'}>
              <li>
                Account Access and Control: You can review and update your
                account information and preferences at any time by logging into
                your Corepass account or contacting our support team.
              </li>
              <li>
                Access and Portability: You may have the right to request access
                to the personal information we hold about you and to receive a
                copy of that information in a commonly used format.
              </li>
              <li>
                Correction and Deletion: You may have the right to request that
                we correct any inaccuracies in your personal information, or to
                delete your personal information in certain circumstances (for
                example, if we no longer need it for the purposes for which it
                was collected). Note that if you request deletion of certain
                data (such as identity verification records), this may prevent
                us from providing some Services (e.g., we might be unable to
                verify your identity again).
              </li>
              <li>
                Object or Restrict Processing: Where applicable, you may have
                the right to object to or request the restriction of certain
                processing activities (for example, data processing for direct
                marketing purposes).
              </li>
              <li>
                Opt-Out of Marketing: You can opt out of receiving marketing
                communications or promotional messages from us at any time by
                following the unsubscribe instructions in our emails or
                contacting us directly (see Contact Us below). Even if you opt
                out of marketing, we may still send you non-marketing
                communications (e.g., about your account or legal rights).
              </li>
              <li>
                Cookie and Tracking Controls: Most web browsers allow you to
                manage or disable cookies. You may also be able to opt out of
                certain tracking through industry opt-out pages (such as the
                Digital Advertising Alliance) or browser settings. Disabling
                cookies may affect the functionality of our Services.
              </li>
              <li>
                California Privacy Rights: If you are a California resident, you
                have rights under the CCPA, including the right to request
                information about how we collect, use, and share your personal
                information, the right to request deletion of personal
                information we have collected about you, and the right to opt
                out of the sale of personal information. Corepass does not
                currently sell personal information, but if you believe we have
                sold or shared your personal information in a way that would be
                covered under California law, you may submit a request as below.
              </li>
              <li>
                European GDPR Rights: If you are in the European Economic Area
                (EEA), the UK, or other jurisdictions with similar data
                protection laws, you have additional rights such as the right to
                request data portability, and the right to withdraw consent to
                processing at any time (where processing is based on consent).
                You may also lodge a complaint with a data protection authority
                if you believe your rights have been violated.
              </li>
            </ul>
            <p className={'mt-3'}>
              To exercise any of these rights or to make choices about your
              information, please contact us at privacy@corepass.com or use the
              contact information in the Contact Us section below. We may
              require you to verify your identity before fulfilling certain
              requests. We will try to respond to all valid requests in
              accordance with applicable laws. Please note that in some cases,
              we may decline your request if an exception or exemption applies
              (for example, if we are legally required to retain certain
              information).
            </p>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>Security</h2>
            <p className={'mt-3'}>
              Corepass takes reasonable technical and organizational measures to
              protect the personal information we collect against unauthorized
              access, disclosure, alteration, and destruction. These measures
              may include encryption of data in transit (e.g., using TLS/SSL)
              and at rest, secure software development practices, regular
              security testing, access controls, and employee training on data
              protection. We also review and update our security practices as
              new technology and standards emerge.
            </p>
            <p className={'mt-3'}>
              However, please understand that no method of transmission or
              storage is perfectly secure. While we strive to protect your
              information, we cannot guarantee the absolute security of your
              data. We encourage you to protect your account by using a strong,
              unique password, enabling any available two-factor authentication,
              and keeping your login credentials confidential.
            </p>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>
              International Transfers
            </h2>
            <p className={'mt-3'}>
              Corepass is a global company and may transfer or store your
              personal information on servers located in countries other than
              your own. For example, we may use cloud service providers and data
              centers in the United States and other jurisdictions. When we
              transfer data internationally, we ensure that it receives an
              adequate level of protection. If you are in the EEA or other
              regions with data protection laws, transfers from your region will
              be governed by appropriate safeguards such as Standard Contractual
              Clauses or other mechanisms that comply with applicable legal
              requirements. By using our Services, you consent to the transfer
              of your information to countries that may have different data
              protection laws than your own.
            </p>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>Third-Party Links</h2>
            <p className={'mt-3'}>
              Our Service may contain links to third-party websites or services
              (for example, integration partners, social media platforms, or
              advertising networks) that are not owned or controlled by
              Corepass. This Privacy Policy does not apply to those third-party
              sites. We do not endorse or assume responsibility for the content,
              privacy practices, or policies of any third-party sites. We
              encourage you to read the privacy policy of any site you visit via
              our links. If you follow a link to a third-party site, be aware
              that their practices may differ from ours, and we are not
              responsible for their privacy practices or content.
            </p>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>
              Changes to This Privacy Policy
            </h2>
            <p className={'mt-3'}>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. When we make
              changes, we will revise the Effective Date at the top of this
              policy. If we make material changes that significantly affect your
              rights or how we use your information, we will provide notice on
              our Services (for example, by email or banner) before the changes
              take effect. We encourage you to review this Privacy Policy
              periodically to stay informed about our privacy practices. Your
              continued use of Corepass Services after those changes become
              effective indicates your acceptance of the updated policy.
            </p>
          </div>
        </div>
      </main>
      <Footer
        imgSrc={BG_IMG}
        title={'Run Your Business Smarter With AI'}
        action={
          <Button
            href={LOGIN_URL}
            target={'_blank'}
            className={
              'bg-white font-semibold !text-[#202939] hover:!bg-[white]/90'
            }
          >
            Try Corepass for free
          </Button>
        }
      />
    </>
  )
}
