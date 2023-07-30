import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useReducer } from 'react'
import { useSelector } from 'react-redux'

const pcBuilder = () => {
  const { data: session } = useSession()
  const {
    categories = {},
    userName,
    pcbuilder,
  } = useSelector((state) => state.pcbuilder)

  const {
    cpu_processor = [],
    motherboard = [],
    ram = [],
    power_supply_unit = [],
    storage_device = [],
    monitor = [],
  } = categories

  const [envet] = useReducer(
    (prev, next) => {
      return { ...prev, ...next }
    },
    {
      cpu_processor:
        cpu_processor.length > 0
          ? cpu_processor?.map((item) => ({
              productName: item.productName,
              id: item.id,
              image: item.image,
            }))
          : [],
      motherboard:
        motherboard.length > 0
          ? motherboard?.map((item) => ({
              productName: item.productName,
              id: item.id,
              image: item.image,
            }))
          : [],
      ram:
        ram.length > 0
          ? ram?.map((item) => ({
              productName: item.productName,
              id: item.id,
              image: item.image,
            }))
          : [],
      power_supply_unit:
        power_supply_unit.length > 0
          ? power_supply_unit?.map((item) => ({
              productName: item.productName,
              id: item.id,
              image: item.image,
            }))
          : [],
      storage_device:
        storage_device.length > 0
          ? storage_device?.map((item) => ({
              productName: item.productName,
              id: item.id,
              image: item.image,
            }))
          : [],
      monitor:
        monitor.length > 0
          ? monitor?.map((item) => ({
              productName: item.productName,
              id: item.id,
              image: item.image,
            }))
          : [],
    }
  )
  console.log(envet)

  return (
    <div>
      <h1 className='text-center text-2xl'>Welcome, {session?.user?.name}</h1>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='overflow-x-auto'>
          <table className='table table-zebra'>
            <thead>
              <tr>
                <th></th>
                <th>Category Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>
                  <Link href={`/product/cpu_processor`}>CPU / Processor</Link>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>
                  <Link href={`/product/motherboard`}>Motherboard</Link>
                </td>
              </tr>
              <tr>
                <th>3</th>
                <td>
                  <Link href={`/product/ram`}>RAM</Link>
                </td>
              </tr>
              <tr>
                <th>4</th>
                <td>
                  <Link href={`/product/storage_device`}>Storage Device</Link>
                </td>
              </tr>
              <tr>
                <th>5</th>
                <td>
                  <Link href={`/product/power_supply_unit`}>
                    Power Supply Unit
                  </Link>
                </td>
              </tr>
              <tr>
                <th>6</th>
                <td>
                  <Link href={`/product/monitor`}>Monitor</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='container mx-auto'>
          <h1 className='text-center text-2xl uppercase'>PC Builder </h1>
          <table className='table table-pin-rows'>
            <thead>
              <tr>
                <th>Category Name</th>
                <th>Product Name</th>
              </tr>
            </thead>
            <tbody>
              {cpu_processor?.map((product) => (
                <tr key={product.id}>
                  <td>CPU / Processor</td>
                  <td>{product.productName}</td>
                </tr>
              ))}
              {motherboard?.map((product) => (
                <tr key={product.id}>
                  <td>Motherboard</td>
                  <td>{product.productName}</td>
                </tr>
              ))}
              {ram?.map((product) => (
                <tr key={product.id}>
                  <td>RAM</td>
                  <td>{product.productName}</td>
                </tr>
              ))}
              {power_supply_unit?.map((product) => (
                <tr key={product.id}>
                  <td>Power Supply Unit</td>
                  <td>{product.productName}</td>
                </tr>
              ))}
              {storage_device?.map((product) => (
                <tr key={product.id}>
                  <td>Storage Device</td>
                  <td>{product.productName}</td>
                </tr>
              ))}
              {monitor?.map((product) => (
                <tr key={product.id}>
                  <td>Monitor</td>
                  <td>{product.productName}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {pcbuilder && (
            <div className='flex justify-center items-center my-4'>
              <button type='submit' className='btn btn-outline  btn-accent'>
                PC Builder
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default pcBuilder
