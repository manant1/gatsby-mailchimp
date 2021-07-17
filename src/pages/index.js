import * as React from "react"
import { Button } from 'antd';
import Layout from "../components/layout"
import Seo from "../components/seo"
import SubscriptionPopup from "../components/subscription-popup"

const IndexPage = () => {
  const [subscriptionOpen, setSubscriptionOpen] = React.useState(true);
  return <Layout>
    <Seo title="Home" />
    <p>Now go build something great.</p>
    <SubscriptionPopup open={subscriptionOpen} onClose={() => setSubscriptionOpen(false)}/>
    <Button onClick={() => setSubscriptionOpen(true)}>Subscribe Now!</Button>
  </Layout>
}

export default IndexPage
