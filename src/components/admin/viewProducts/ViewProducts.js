//// admin panelindeki allproducts componenti
import React, {useState} from 'react'

const ViewProducts = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

  }, [])

  
  const getProducts = () => {
    setIsLoading(true)
    try {
      const productRef = collection (db, "products")
    }
    catch(error){
      setIsLoading (false)
    }
      toast.error(error.message)
  }
  return (
    <div>ViewProducts</div>
  )
}

export default ViewProducts