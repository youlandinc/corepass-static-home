'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { PatternFormat } from 'react-number-format'
import { _askForDemo } from '@/request'
import { useState } from 'react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
)

const FormSchema = z
  .object({
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    companyName: z.string(),
    phoneNumber: z.string().regex(phoneRegex),
    howCanWeHelpYou: z.string().optional(),
    checked: z.boolean().refine((val) => val),
  })
  .required()

const PhoneInput = (props: any) => {
  return (
    <PatternFormat
      allowEmptyFormatting={true}
      customInput={Input}
      format={'(###) ###-####'}
      mask={'_'}
      {...props}
    />
  )
}

const INITIAL_FORM_VALUE = {
  email: '',
  firstName: '',
  lastName: '',
  companyName: '',
  phoneNumber: '',
  howCanWeHelpYou: '',
  checked: false,
}

export function BookDemo({ label = <>Book a demo</>, className = '' }) {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: INITIAL_FORM_VALUE,
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const {
      email,
      firstName,
      lastName,
      companyName,
      phoneNumber,
      howCanWeHelpYou,
      checked,
    } = data
    if (!checked) {
      return
    }
    const postData = {
      email,
      firstName,
      lastName,
      companyName,
      phoneNumber: phoneNumber.trim(),
      howCanWeHelpYou,
    }

    setLoading(true)
    try {
      await _askForDemo(postData)
      toast('Submitted successfully!')
    } catch (e) {
      toast('Oops! There was a problem submitting your form.')
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(e) => {
        setOpen(e)
        if (!e) {
          form.reset()
        }
      }}
    >
      <DialogTrigger
        className={cn(
          'group inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 hover:text-slate-100 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800 active:text-blue-100',
          className,
        )}
      >
        {label}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Book a demo</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-3">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Work email address*</FormLabel>
                      <FormControl>
                        <Input className={'w-full'} {...field} />
                      </FormControl>
                    </FormItem>
                  )
                }}
              />
              <div className={'grid grid-cols-2 items-stretch gap-4'}>
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>First name*</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )
                  }}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Last name*</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )
                  }}
                />
              </div>
              <div className={'grid grid-cols-2 items-stretch gap-4'}>
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Company name*</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )
                  }}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Phone number*</FormLabel>
                        <FormControl>
                          <PhoneInput {...field} />
                        </FormControl>
                      </FormItem>
                    )
                  }}
                />
              </div>

              <FormField
                control={form.control}
                name="howCanWeHelpYou"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How can we help you?</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="checked"
                render={({ field }) => (
                  <FormItem
                    className={
                      'flex flex-row items-start space-y-0 space-x-1.5 rounded-md'
                    }
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="mt-0.5 space-y-1 leading-none">
                      <FormLabel>
                        I agree to receive communications from Corepass, I
                        understand that I can unsubscribe at any time.
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <div className={'text-[12px] text-[#9095A3]'}>
                We&apos;re committed to your privacy. Corepass uses the
                information you provide to us to contact you about our relevant
                content, products, and services. You may unsubscribe from these
                communications at any time. Msg & data rates may apply. Message
                frequency varies. Text STOP to cancel SMS communication. For
                more information, check out our Privacy Policy.
              </div>

              <Button
                type="submit"
                className={'w-full rounded-4xl'}
                disabled={loading}
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
