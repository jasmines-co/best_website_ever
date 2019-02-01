// This is the Link API
import Link from 'next/link'

const Index = () => (
    <div>
      <Link href="/about" style={{ fontSize: 20 }}>
      <button>About Page </button>
      </Link>
      <h1>ToshiText</h1>
    </div>
  )
  
  export default Index
