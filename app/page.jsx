import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>At BlazeNet Home Fiber, we are committed to revolutionizing your digital experience with lightning-fast internet connectivity. As a leading Internet Service Provider (ISP), we specialize in delivering top-tier fiber-optic internet solutions directly to your home.</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>At BlazeNet Home Fiber, we understand that internet connectivity is more than just a service—it's a lifeline. That's why we go above and beyond to deliver exceptional customer service and technical support. Our team of dedicated professionals is here to ensure that your internet experience is seamless and hassle-free.</p>
      </div>
      <div className="card">
        <h3>Mission</h3>
        <p>Our mission at BlazeNet Home Fiber is simple: to provide unparalleled internet connectivity that empowers individuals, families, and communities to thrive in today's digital age. We strive to break barriers and push boundaries, ensuring that every home we serve has access to reliable, high-speed internet.</p>
      </div>
    </main>
  )
}
