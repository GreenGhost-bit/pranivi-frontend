import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageSquare, Calendar, ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] opacity-20">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-blue-600/50 to-transparent blur-3xl" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
              Get in Touch with Pranivi
            </h1>
            <p className="text-slate-600 text-lg md:text-xl">
              Have questions about our procurement solutions? We're here to help you streamline your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Sales Card */}
            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Talk to Sales</h3>
                <p className="text-slate-600 mb-4">
                  Interested in Pranivi's solutions? Let's discuss how we can help your business.
                </p>
                <div className="space-y-2">
                  <p className="font-medium text-blue-600">+1 (800) 123-4567</p>
                  <Button variant="outline" className="w-full group">
                    Call Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Support Card */}
            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-green-50 rounded-lg w-12 h-12 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                <p className="text-slate-600 mb-4">
                  Need help with your Pranivi platform? Our support team is ready to assist.
                </p>
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 group">
                  Start Chat
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Demo Card */}
            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Schedule a Demo</h3>
                <p className="text-slate-600 mb-4">
                  See Pranivi in action. Book a personalized demo with our product experts.
                </p>
                <Button variant="outline" className="w-full group">
                  Book Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-green-600/90 mix-blend-multiply" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3SMFTstblSugbJo3ezuhUGyoCKH5Kc.png"
              alt="Pranivi Support Team"
              width={1200}
              height={400}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-2xl px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">We're Here to Help You Succeed</h2>
                <p className="text-lg md:text-xl text-white/90">
                  Our team of procurement experts is ready to help you transform your business operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

