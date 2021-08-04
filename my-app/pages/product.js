import { useRouter } from 'next/router'

const Product = ({}) => {
  const router = useRouter()
  const { id } = router.query
  return (
    <CatchErrors>
      <GlobalFields>
        <EditProduct productId={id} />
      </GlobalFields>
    </CatchErrors>
  );
};

export default Product;