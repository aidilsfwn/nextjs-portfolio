const PrimaryButton = ({ title, onClick }: { title: string; onClick: () => void }) => {
  return (
    <button onClick={onClick} className='rounded-lg px-5 py-2 bg-indigo-500 shadow-xl'>
      <p className='text-white text-xs  text-center font-medium'>{title}</p>
    </button>
  )
}

export { PrimaryButton }
