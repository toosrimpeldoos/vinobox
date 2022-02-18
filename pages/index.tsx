import Head from 'next/head'
import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Head>
        <title>The next Vinoprint </title>
      </Head>            
      <div className=' flex flex-col'>
        <Link href='/vinoprint/430459' ><a>Persoon_1</a></Link>
        <Link href='/vinoprint/42133 ' ><a>Persoon_2</a></Link> 
        <Link href='/vinoprint/678108' ><a>Persoon_3</a></Link> 
      </div>
    </div>    
  )
}
