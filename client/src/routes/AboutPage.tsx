import { About } from '@/components/About'
import { Stack } from '@/components/Stack'
import { usePageTitle } from '@/hooks/usePageTitle'

export function AboutPage() {
  usePageTitle('About')

  return (
    <div className="pt-20">
      <About />
      <Stack />
    </div>
  )
}