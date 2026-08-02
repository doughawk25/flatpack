"use client"

import * as React from "react"
import Link from "next/link"
import { sys } from "@/lib/system-config"
import { motion } from "motion/react"
import { useForm } from "react-hook-form"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { z } from "zod"
import { toast } from "sonner"
import { ArrowRight } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const formSchema = z.object({
  email: z.email("Enter a valid email address"),
})

type FormValues = z.infer<typeof formSchema>

const chartData = [
  { day: "Mon", signups: 132 },
  { day: "Tue", signups: 187 },
  { day: "Wed", signups: 141 },
  { day: "Thu", signups: 236 },
  { day: "Fri", signups: 291 },
  { day: "Sat", signups: 173 },
  { day: "Sun", signups: 155 },
]

const chartConfig = {
  signups: { label: "Signups", color: "var(--chart-1)" },
} satisfies ChartConfig

const invoices = [
  { id: "INV-0041", customer: "Northwind", status: "Paid", amount: "$1,250" },
  { id: "INV-0042", customer: "Acme Corp", status: "Pending", amount: "$3,400" },
  { id: "INV-0043", customer: "Globex", status: "Paid", amount: "$860" },
  { id: "INV-0044", customer: "Initech", status: "Overdue", amount: "$2,150" },
]

function SignupForm() {
  const form = useForm<FormValues>({
    resolver: standardSchemaResolver(formSchema),
    defaultValues: { email: "" },
  })

  function onSubmit(values: FormValues) {
    toast.success(`Subscribed ${values.email}`)
    form.reset()
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <FieldGroup>
        <Field data-invalid={!!form.formState.errors.email}>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            aria-invalid={!!form.formState.errors.email}
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <FieldError>{form.formState.errors.email.message}</FieldError>
          )}
        </Field>
        <Field orientation="horizontal">
          <Button type="submit">Subscribe</Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => toast("Hello from Sonner")}
          >
            Show toast
          </Button>
          <Dialog>
            <DialogTrigger
              render={<Button variant="outline">Open dialog</Button>}
            />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>It works</DialogTitle>
                <DialogDescription>
                  shadcn Dialog rendering with stock styles.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </Field>
      </FieldGroup>
    </form>
  )
}

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <header className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-tight">
              The stock kit, fully assembled
            </h1>
            <Badge variant="secondary">all stock</Badge>
          </div>
          <p className="max-w-2xl text-muted-foreground">
            A complete design-system foundation — Next.js, Tailwind v4, the
            full shadcn/ui component kit, motion, and theming. Everything below
            is live. Validate your product flows on it today; customize it
            when the flows have taught you what to change.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={sys("/components")}
              className="inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
            >
              Browse all components <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href={sys("/foundations")}
              className="inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
            >
              See the foundations <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Forms</CardTitle>
              <CardDescription>
                Field + react-hook-form + zod, Dialog, Sonner.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SignupForm />
            </CardContent>
          </Card>

          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Charts</CardTitle>
              <CardDescription>Recharts via the chart component.</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-40 w-full">
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="day"
                    tickLine={false}
                    tickMargin={8}
                    axisLine={false}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="signups"
                    fill="var(--color-signups)"
                    radius={4}
                    isAnimationActive={false}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Controls</CardTitle>
              <CardDescription>
                Switch, slider, progress, checkbox.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="text-sm">Email notifications</span>
                <Switch defaultChecked aria-label="Email notifications" />
              </div>
              <Slider defaultValue={[64]} max={100} aria-label="Volume" />
              <Progress value={62} aria-label="Storage used" />
              <div className="flex items-center gap-2">
                <Checkbox id="terms" defaultChecked />
                <label htmlFor="terms" className="text-sm">
                  Accept terms and conditions
                </label>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Tables</CardTitle>
              <CardDescription>Data-dense screens, day one.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>{invoice.customer}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            invoice.status === "Paid"
                              ? "secondary"
                              : invoice.status === "Pending"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {invoice.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {invoice.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Tabs & people</CardTitle>
              <CardDescription>Tabs, avatars, motion.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="team">
                <TabsList>
                  <TabsTrigger value="team">Team</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                </TabsList>
                <TabsContent value="team" className="pt-4">
                  <div className="flex items-center gap-3">
                    {["AB", "CD", "EF", "GH"].map((initials) => (
                      <Avatar key={initials}>
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>
                    ))}
                    <span className="text-sm text-muted-foreground">
                      +12 others
                    </span>
                  </div>
                </TabsContent>
                <TabsContent value="activity" className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Every component here is stock — validate flows first,
                    customize later.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </main>
  )
}
