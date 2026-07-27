"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { components, foundations } from "@/lib/registry"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type Crumb = { title: string; href?: string }

function crumbsFor(pathname: string): Crumb[] {
  const [, section, slug] = pathname.split("/")

  if (section === "components") {
    const crumbs: Crumb[] = [{ title: "Components", href: slug ? "/components" : undefined }]
    if (slug) {
      const entry = components.find((c) => c.slug === slug)
      crumbs.push({ title: entry?.title ?? slug })
    }
    return crumbs
  }

  if (section === "foundations") {
    const crumbs: Crumb[] = [{ title: "Foundations", href: slug ? "/foundations" : undefined }]
    if (slug) {
      const entry = foundations.find((f) => f.slug === slug)
      crumbs.push({ title: entry?.title ?? slug })
    }
    return crumbs
  }

  return [{ title: "Overview" }]
}

export function SiteBreadcrumb() {
  const pathname = usePathname()
  const crumbs = crumbsFor(pathname)
  const atRoot = crumbs.length === 1 && !crumbs[0].href

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          {atRoot ? (
            <BreadcrumbPage>Monad</BreadcrumbPage>
          ) : (
            <BreadcrumbLink render={<Link href="/" />}>Monad</BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {crumbs.map((crumb) => (
          <span key={crumb.title} className="contents">
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {crumb.href ? (
                <BreadcrumbLink render={<Link href={crumb.href} />}>
                  {crumb.title}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
