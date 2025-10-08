import { Metadata } from 'next'
import OnlineOrders from '@/components/pages/product/OnlineOrders'

export const metadata: Metadata = {
  title: 'Online Orders - Grow Restaurant Revenue From Digital Channels | RAY',
  description: 'Grow revenue from online orders, reservations, and deliveries with seamless integrations, direct ordering systems, and data-driven insights that increase profit margins.',
  openGraph: {
    title: 'Online Orders - Grow Restaurant Revenue From Digital Channels | RAY',
    description: 'Grow revenue from online orders, reservations, and deliveries with seamless integrations, direct ordering systems, and data-driven insights that increase profit margins.',
    url: 'https://rayapp.io/product/online-orders',
  },
  twitter: {
    title: 'Online Orders - Grow Restaurant Revenue From Digital Channels | RAY',
    description: 'Grow revenue from online orders, reservations, and deliveries with seamless integrations, direct ordering systems, and data-driven insights that increase profit margins.',
  },
  alternates: {
    canonical: 'https://rayapp.io/product/online-orders',
  },
}

export default function OnlineOrdersPage() {
  return <OnlineOrders />
}