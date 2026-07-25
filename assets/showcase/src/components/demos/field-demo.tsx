"use client"

import { useForm } from "react-hook-form"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { z } from "zod"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
})

type FormValues = z.infer<typeof schema>

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: standardSchemaResolver(schema),
    defaultValues: { username: "" },
  })

  return (
    <form
      onSubmit={handleSubmit(() => {})}
      className="flex flex-col gap-4"
      noValidate
    >
      <Field data-invalid={!!errors.username}>
        <FieldLabel htmlFor="username">Username</FieldLabel>
        <Input
          id="username"
          aria-invalid={!!errors.username}
          {...register("username")}
        />
        <FieldError errors={[errors.username]} />
      </Field>
      <Button type="submit" size="sm" className="w-fit">
        Create account
      </Button>
    </form>
  )
}

export default function FieldDemo() {
  return (
    <div className="flex flex-col gap-6">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-demo-email">Email</FieldLabel>
          <Input id="field-demo-email" type="email" placeholder="you@company.com" />
          <FieldDescription>
            We&apos;ll only use this to send order updates.
          </FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="field-demo-notify">Notifications</FieldLabel>
            <FieldDescription>Get a weekly digest by email.</FieldDescription>
          </FieldContent>
          <Checkbox id="field-demo-notify" defaultChecked />
        </Field>
      </FieldGroup>

      <FieldSet>
        <FieldLegend>Address</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="field-demo-street">Street</FieldLabel>
            <Input id="field-demo-street" placeholder="123 Main St" />
          </Field>
          <div className="flex gap-4">
            <Field>
              <FieldLabel htmlFor="field-demo-city">City</FieldLabel>
              <Input id="field-demo-city" placeholder="Austin" />
            </Field>
            <Field>
              <FieldLabel htmlFor="field-demo-zip">ZIP</FieldLabel>
              <Input id="field-demo-zip" placeholder="78701" />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>

      <SignupForm />
    </div>
  )
}
