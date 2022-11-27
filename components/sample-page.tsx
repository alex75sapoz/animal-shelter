export default function SamplePage({name}: {
  name: string
}) {
  return (
    <div className='flex justify-center items-center h-80 border-2 border-dashed text-center align-middle border-sky-500'>
      <div className='flex-col'>
        <p className='text-4xl font-bold'>{name}</p>
        <p>Add Content Here</p>
      </div>
    </div>
  )
}