import { Layout } from '@/components/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      <section>
        <div>
          <h1>Ai CV Editor 1.0</h1>
          <p>this app allows you to create and edit your cv</p>
          <p>
            you can sync your previous information from ifo jobs an save the
            changes you make
          </p>
        </div>
      </section>
    </Layout>
  )
}
export async function getServerSideProps() {
  return {
    props: {
      example: 'example',
    },
  }
}
