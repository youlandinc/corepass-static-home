import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import type { Metadata } from 'next'
import BG_IMG from '@/images/home/footer/home-footer.svg'
import { Button } from '@/components/Button'
import { LOGIN_URL } from '@/constant'

export const metadata: Metadata = {
  title: {
    template: '%s - Corepass',
    default: 'Terms of Use',
  },
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
            Terms & Conditions
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
          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>1. Definitions</h2>
            <ul className={'mt-3 list-disc pl-6'}>
              <li>
                “Corepass” or “Company” means Corepass, Inc., a software
                development company focused on delivering an integrated
                origination platform for lenders.
              </li>
              <li>
                “Service” or “Platform” refers to the Corepass online
                software-as-a-service platform, including all features, modules,
                APIs, and associated services provided by Corepass.
              </li>
              <li>
                “User,” “You,” or “Customer” means any individual or legal
                entity that creates an account or uses the Service under these
                Terms.
              </li>
              <li>
                “Authorized User” means any person who is authorized by a
                Customer to access the Service using that Customer’s
                credentials.
              </li>
              <li>
                “Account” means a unique account created for You to access the
                Service.
              </li>
              <li>
                “Subscription Plan” means the level of Service (e.g., Basic,
                Pro, Enterprise) and associated features, limits, and pricing
                chosen by the Customer.
              </li>
              <li>
                “Fees” means the subscription fees and other charges payable by
                You to access and use the Service, as described in the Order
                Form or as listed on the Corepass website.
              </li>
              <li>
                “Order Form” means any order, subscription agreement, or online
                sign-up process in which You subscribe to the Service, detailing
                the Subscription Plan and applicable Fees.
              </li>
              <li>
                “Documentation” means any user guides, help text, or other
                materials provided by Corepass to describe the Service.
              </li>
              <li>
                “User Content” or “Customer Data” means all electronic data,
                text, graphics, or other content that You or Your Authorized
                Users upload, store, or transmit through the Service.
              </li>
              <li>
                “Privacy Policy” means the Corepass Privacy Policy (available on
                the Corepass website), which is incorporated into these Terms by
                reference and governs Corepass’s use of Your personal data.
              </li>
              <li>
                “Agreement” means these Terms and Conditions (including any
                exhibits, addenda, or Order Forms) that form the entire
                agreement between You and Corepass regarding the Service.
              </li>
              <li>
                “Effective Date” means the date on which You first accept this
                Agreement or begin using the Service, whichever is earlier.
              </li>
            </ul>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>
              2. Acceptance of Terms
            </h2>
            <p className={'mt-3'}>
              By creating an Account or otherwise accessing or using the
              Service, You agree to be bound by these Terms and Conditions and
              by the Privacy Policy. If You do not agree to these Terms, do not
              create an Account or use the Service. These Terms constitute the
              entire legal agreement between You and Corepass and govern Your
              use of the Service, superseding any prior agreements or
              representations.
            </p>
            <p className={'mt-3'}>
              If You are accepting these Terms on behalf of a business or other
              entity, You represent that You have the authority to bind that
              entity to these Terms. You also represent that You are of legal
              age to form a binding contract and meet all eligibility
              requirements described in Section 3 below.
            </p>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>
              3. Eligibility and Account Registration
            </h2>
            <ul className={'mt-3 list-disc pl-6'}>
              <li>
                You must be at least 18 years old or the age of majority in Your
                jurisdiction to use the Service.
              </li>
              <li>
                If You are registering on behalf of an organization or company,
                You represent that You have the authority to bind that
                organization to this Agreement.
              </li>
              <li>
                To access the Service, You must register for an Account. You
                agree to provide accurate, current, and complete information
                during registration and to update this information as necessary.
              </li>
              <li>
                You are responsible for safeguarding Your Account credentials.
                You agree to keep Your username, password, and other login
                information confidential and not to share it with unauthorized
                individuals.
              </li>
              <li>
                You agree to notify Corepass immediately if You suspect any
                unauthorized use of Your Account or any other security breach
                related to the Service.
              </li>
              <li>
                You are responsible for all activities that occur under Your
                Account or Authorized Users’ accounts. You agree not to allow
                others to use Your Account and to comply with all applicable
                laws and regulations in connection with Your use of the Service.
              </li>
            </ul>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>
              4. Subscription Plans and Payment Terms
            </h2>
            <ul className={'mt-3 list-disc pl-6'}>
              <li>
                Corepass offers multiple Subscription Plans with different
                features and pricing. Descriptions of each plan and the
                associated Fees are provided on the Corepass website or in any
                applicable Order Form.
              </li>
              <li>
                By selecting a Subscription Plan and submitting Your order, You
                agree to pay the applicable Fees for that plan. Subscription
                fees will be billed in advance on a monthly or annual basis,
                depending on the billing cycle You select.
              </li>
              <li>
                Payment is due upon registration and at the start of each
                renewal term. You authorize Corepass to charge Your chosen
                payment method (e.g., credit card) for all Fees and applicable
                taxes. If payment is not received by the due date, Corepass may
                suspend or terminate Your access to the Service.
              </li>
              <li>
                Fees are non-refundable, except as required by law or as
                expressly provided in these Terms. You are responsible for all
                taxes associated with the Service, excluding taxes based on
                Corepass’s net income.
              </li>
              <li>
                If You upgrade or downgrade Your Subscription Plan, Corepass
                will apply pro-rata charges or refunds on a reasonable basis.
                Downgrading a plan may restrict access to certain features or
                data.
              </li>
              <li>
                Free Trials: If Corepass offers a free trial or promotional
                access, such trial period will automatically convert to a paid
                subscription at the end of the trial unless You cancel before
                the trial expires. Corepass may terminate or modify free trials
                at any time in its discretion.
              </li>
              <li>
                Price Changes: Corepass reserves the right to change the pricing
                of its Subscription Plans. Corepass will provide notice of any
                price increase before it takes effect. Continued use of the
                Service after the price change constitutes Your acceptance of
                the new Fees.
              </li>
            </ul>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>5. Use Restrictions</h2>
            <p className={'mt-3'}>
              You agree that You will not, and will not allow any Authorized
              User to:
            </p>
            <ul className={'mt-3 list-disc pl-6'}>
              <li>
                Use the Service in any manner that violates any applicable law,
                regulation, or third-party right.
              </li>
              <li>
                Reverse engineer, decompile, disassemble, or otherwise attempt
                to derive the source code or underlying structure of the
                Service.
              </li>
              <li>
                Interfere with, disrupt, or overload the Service or its
                infrastructure (for example, through denial-of-service attacks
                or excessive automated requests beyond the limits of the
                Corepass API).
              </li>
              <li>
                Introduce malicious code or material (e.g., viruses, malware, or
                other harmful software) into the Service or any Corepass system.
              </li>
              <li>
                Use the Service to store or transmit infringing, libelous,
                defamatory, or otherwise unlawful content.
              </li>
              <li>
                Use the Service to store or process sensitive personal
                information (such as Social Security numbers, credit card
                numbers, or medical data) beyond what is necessary for identity
                verification in accordance with Corepass’s policies and
                applicable law.
              </li>
              <li>
                Use the Service to send spam, unsolicited communications, or
                phishing messages.
              </li>
              <li>
                Copy, distribute, or disclose any portion of the Service or any
                content (other than Your User Content) except as expressly
                authorized by Corepass in writing.
              </li>
              <li>
                Sell, resell, sublicense, or otherwise distribute access to the
                Service, unless You have executed a separate reseller or
                partnership agreement with Corepass.
              </li>
              <li>
                Create Internet “links” to the Service or “frame,” “mirror,” or
                otherwise incorporate the Service or any portion of it into any
                other site or application without Corepass’s prior written
                consent.
              </li>
            </ul>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>
              6. Intellectual Property Rights
            </h2>
            <ul className={'mt-3 list-disc pl-6'}>
              <li>
                All rights, title, and interest in and to the Service (including
                software, interfaces, design, text, graphics, and other content,
                excluding User Content) are owned by Corepass or its licensors
                and are protected by copyright, patent, trademark, and other
                intellectual property laws. The Service is licensed, not sold,
                to You.
              </li>
              <li>
                Subject to Your compliance with these Terms, Corepass grants You
                a limited, non-exclusive, non-transferable, and
                non-sublicensable license to access and use the Service and any
                accompanying software provided by Corepass, solely for Your
                internal business or personal purposes.
              </li>
              <li>
                You will not remove or obscure any copyright, trademark, or
                other proprietary notices on the Service or on any copies
                thereof. The Corepass name, logo, and all related names, logos,
                and slogans are trademarks of Corepass or its licensors. You may
                not use Corepass trademarks without Corepass’s prior written
                consent.
              </li>
              <li>
                Reservation of Rights: Except for the rights explicitly granted
                in these Terms, Corepass and its licensors reserve all
                intellectual property rights in and to the Service.
              </li>
            </ul>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>
              7. User Content and Data
            </h2>
            <ul className={'mt-3 list-disc pl-6'}>
              <li>
                You retain all right, title, and interest in the User Content
                that You upload, store, or transmit through the Service.
                Corepass does not claim ownership of Your User Content.
              </li>
              <li>
                By using the Service, You grant Corepass a worldwide,
                non-exclusive, royalty-free license to use, copy, transmit, and
                store Your User Content solely to the extent necessary to
                operate and provide the Service, and to improve or customize the
                Service.
              </li>
              <li>
                You represent and warrant that You have all necessary rights,
                licenses, and permissions to submit Your User Content to the
                Service, and that Your User Content complies with all applicable
                laws. You are solely responsible for Your User Content and for
                the consequences of uploading or sharing it.
              </li>
              <li>
                Corepass does not endorse or verify User Content. However,
                Corepass reserves the right to remove, block, or refuse to
                display or delete any User Content that it believes violates
                these Terms or any applicable law.
              </li>
              <li>
                Corepass will use commercially reasonable efforts to protect
                Your User Content from loss or unauthorized access, but Corepass
                is not liable for any loss or disclosure of User Content except
                as expressly provided in these Terms.
              </li>
              <li>
                Data Retention: Upon termination or expiration of Your
                subscription, Corepass may delete or disable all User Content
                associated with Your Account after a reasonable period. You
                agree that Corepass shall not be liable for any loss of User
                Content following such deletion.
              </li>
            </ul>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>
              8. Privacy and Security
            </h2>
            <ul className={'mt-3 list-disc pl-6'}>
              <li>
                Corepass is committed to protecting the privacy and security of
                Your personal data. Our collection and use of personal data are
                governed by the Privacy Policy, which is incorporated into these
                Terms. Please review the Privacy Policy for details on how we
                collect, use, and store personal data.
              </li>
              <li>
                Corepass will maintain reasonable administrative, physical, and
                technical safeguards designed to protect the security of Your
                data. These measures are intended to provide a level of security
                appropriate to the risk of processing Your data.
              </li>
              <li>
                You acknowledge that no data transmission or storage system can
                be guaranteed to be 100% secure. Corepass cannot warrant that
                Your User Content or personal data will be completely secure.
                Corepass does not control or guarantee the security of data
                transmitted through third-party networks.
              </li>
              <li>
                Corepass will notify You in accordance with applicable law if it
                becomes aware of a security breach that may affect Your User
                Content or personal data.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of Your
                Account credentials and for any actions taken under Your
                Account. You should implement reasonable security measures on
                Your end (such as strong passwords and secure devices) to
                protect Your data.
              </li>
            </ul>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>9. Disclaimers</h2>
            <ul className={'mt-3 list-disc pl-6'}>
              <li>
                THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. COREPASS AND
                ITS AFFILIATES DISCLAIM ALL WARRANTIES, INCLUDING ANY IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                TITLE, AND NON-INFRINGEMENT.
              </li>
              <li>
                COREPASS DOES NOT WARRANT THAT THE SERVICE WILL BE
                UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE. COREPASS MAKES
                NO GUARANTEES REGARDING THE AVAILABILITY OR PERFORMANCE OF THE
                SERVICE. YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK.
              </li>
              <li>
                COREPASS DOES NOT GUARANTEE THAT THE SERVICE WILL MEET YOUR
                REQUIREMENTS OR EXPECTATIONS, OR THAT ANY OUTPUT FROM THE
                SERVICE WILL BE ACCURATE, COMPLETE, OR TIMELY.
              </li>
              <li>
                ANY CONTENT OR SERVICES PROVIDED BY THIRD PARTIES (INCLUDING
                THIRD-PARTY APIS, INTEGRATIONS, OR RESOURCES AVAILABLE THROUGH
                THE SERVICE) ARE PROVIDED ON AN “AS IS” BASIS. COREPASS HAS NO
                CONTROL OVER SUCH THIRD-PARTY CONTENT AND DISCLAIMS ANY
                LIABILITY RELATED TO THIRD-PARTY PRODUCTS OR SERVICES.
              </li>
              <li>
                NO ADVICE OR INFORMATION PROVIDED BY COREPASS OR ITS
                REPRESENTATIVES SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED
                IN THESE TERMS.
              </li>
            </ul>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>
              10. Limitation of Liability
            </h2>
            <ul className={'mt-3 list-disc pl-6'}>
              <li>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, COREPASS AND ITS
                OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES WILL NOT
                BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO THESE TERMS OR
                YOUR USE OF (OR INABILITY TO USE) THE SERVICE, INCLUDING BUT NOT
                LIMITED TO DAMAGES FOR LOSS OF PROFITS, REVENUE, DATA, OR
                BUSINESS INTERRUPTION, EVEN IF COREPASS HAS BEEN ADVISED OF THE
                POSSIBILITY OF SUCH DAMAGES.
              </li>
              <li>
                IN NO EVENT WILL COREPASS’S AGGREGATE LIABILITY ARISING OUT OF
                OR RELATING TO THESE TERMS OR YOUR USE OF THE SERVICE EXCEED THE
                AMOUNTS YOU PAID TO COREPASS FOR THE SERVICE IN THE TWELVE (12)
                MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY (OR, IF YOU
                HAVE NOT PAID ANY FEES, ONE HUNDRED DOLLARS (US$100)).
              </li>
              <li>
                THE FOREGOING LIMITATIONS WILL APPLY EVEN IF ANY EXCLUSIVE
                REMEDY PROVIDED IN THESE TERMS FAILS OF ITS ESSENTIAL PURPOSE.
              </li>
              <li>
                SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
                CERTAIN TYPES OF LIABILITY, SO SOME OR ALL OF THE ABOVE
                LIMITATIONS MAY NOT APPLY TO YOU. NOTHING IN THESE TERMS SHALL
                LIMIT COREPASS’S LIABILITY FOR DEATH OR PERSONAL INJURY CAUSED
                BY ITS NEGLIGENCE, OR FOR FRAUD, FRAUDULENT MISREPRESENTATION,
                OR ANY OTHER LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED BY
                APPLICABLE LAW.
              </li>
            </ul>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>11. Indemnification</h2>
            <ul className={'mt-3 list-disc pl-6'}>
              <li>
                Your Indemnity: You agree to defend, indemnify, and hold
                harmless Corepass and its officers, directors, employees,
                agents, and affiliates (the “Corepass Indemnitees”) from and
                against any and all claims, liabilities, damages, losses, costs,
                and expenses (including reasonable attorneys’ fees) arising out
                of or related to (i) Your use of the Service; (ii) Your breach
                of these Terms; (iii) any User Content You upload, store, or
                transmit through the Service; or (iv) Your negligence or willful
                misconduct.
              </li>
              <li>
                Corepass Indemnity: Corepass will defend You against any claim
                brought by a third party alleging that the unmodified Service
                (excluding any content or third-party integrations provided or
                modified by You) infringes such third party’s United States
                patent or copyright, and will pay any damages finally awarded
                against You by a court (or any settlement approved by Corepass)
                resulting from such claim; provided that You (i) promptly notify
                Corepass in writing of the claim; (ii) give Corepass sole
                control of the defense and settlement of the claim; and (iii)
                provide Corepass with all reasonably requested assistance. The
                foregoing states Corepass’s entire liability and Your exclusive
                remedy with respect to such infringement claims.
              </li>
              <li>
                Survival: The indemnification obligations set forth in this
                Section 11 will survive the termination or expiration of this
                Agreement.
              </li>
            </ul>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>
              12. Termination and Suspension
            </h2>
            <ul className={'mt-3 list-disc pl-6'}>
              <li>
                Termination by You: You may cancel Your subscription at any time
                by providing notice to Corepass (for example, via the account
                portal or customer support). Upon cancellation, Your access to
                the Service will continue until the end of the current paid
                term. All Fees are non-refundable unless otherwise required by
                law.
              </li>
              <li>
                Termination by Corepass: Corepass may suspend or terminate Your
                access to the Service, or any portion thereof, immediately and
                without notice if: (a) You breach any provision of these Terms;
                (b) You fail to pay any Fees when due; (c) Corepass is required
                to do so by law or a governmental authority; or (d) Corepass
                determines that Your actions may cause legal liability for You,
                other users, or Corepass.
              </li>
              <li>
                Effects of Termination: Upon termination or expiration of this
                Agreement: (i) Your right to access and use the Service will
                immediately cease; (ii) You must cease all use of the Service;
                (iii) Corepass may delete or disable Your Account and all
                associated User Content; and (iv) any of Corepass’s
                confidentiality and privacy obligations with respect to Your
                data will survive only as required by law.
              </li>
              <li>
                Survival: Sections 6 (Intellectual Property Rights), 7 (User
                Content and Data), 8 (Privacy and Security), 9 (Disclaimers), 10
                (Limitation of Liability), 11 (Indemnification), and any other
                provisions that by their nature should survive, will remain in
                effect after termination or expiration of this Agreement.
              </li>
            </ul>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>
              13. Governing Law and Dispute Resolution
            </h2>
            <p className={'mt-3'}>
              These Terms and any disputes arising out of or related to them
              will be governed by the laws of the State of California, without
              regard to its conflict of laws provisions. You and Corepass agree
              to submit to the personal and exclusive jurisdiction of the state
              and federal courts located in San Francisco County, California, to
              resolve any dispute or claim arising under these Terms; provided
              that Corepass may bring claims against You in Your local
              jurisdiction for enforcement of its rights.
            </p>
          </div>

          <div className={'mt-6'}>
            <h2 className={'mt-8 text-2xl font-medium'}>
              14. Amendments to Terms
            </h2>
            <p className={'mt-3'}>
              Corepass may modify these Terms at any time by posting amended
              terms on the Corepass website or by sending You notice (for
              example, via email or a notification in the Service). If the
              changes are material, Corepass will notify You before they become
              effective. Your continued use of the Service after any such
              changes take effect will constitute Your acceptance of the updated
              Terms. If You do not agree to the new Terms, You should stop using
              the Service.
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
