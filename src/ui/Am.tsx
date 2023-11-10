import cn from 'classnames'

const Am = () => (
  <div
    className={cn(
      'inline-block text-xl font-bold text-black align-center group uppercase text-right',
    )}
  >
    <div className="inline-block">
      <span className="inline-block w-64 p-1 -skew-x-12 animate-am-bg">
        <span className="inline-block skew-x-12 before:animate-am before:pr-4"></span>
      </span>
    </div>
  </div>
)

export { Am }
