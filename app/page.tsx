import Button from './components/Button'

export default function Home() {
  return (
    <section className='border border-lime-400 py-24'>
      <div className='container border border-blue-500'>
        <h1 className='mb-6 text-3xl font-bold'>Tailwind Variants Examples</h1>
        <div className='flex justify-around gap-2 border border-red-500 py-4 pl-2'>
          <Button size='sm' color='secondary' text='Click Me' />
          <Button size='md' color='primary' text='Primary' />
          <Button
            size='md'
            color='primary'
            text='I am disabled'
            disabled={true}
          />
          <Button size='lg' color='warning' text='Delete' />
          <Button text='Default' />
        </div>
      </div>
      <div className='flex h-20 items-center justify-between border border-cyan-500 bg-slate-200'>
        <div className='flex'>
          <p className='grow bg-slate-300'>Download here</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='ml-1 h-6 w-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
            />
          </svg>
        </div>
        <p className='bg-blue-400 tracking-wide'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit vitae
          sapiente dolorib
        </p>
      </div>
    </section>
  )
}
