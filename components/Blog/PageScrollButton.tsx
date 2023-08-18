const PageScrollButton = () => {
  return (
    <div
      className="wow fadeInUp -mx-4 flex flex-wrap"
      data-wow-delay=".15s"
    >
      <div className="w-full px-4">
        <ul className="flex items-center justify-center pt-8">
          <li className="mx-1">
            <a
              href="#0"
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
            >
              Prev
            </a>
          </li>
          <li className="mx-1">
            <a
              href="#0"
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
            >
              1
            </a>
          </li>
          <li className="mx-1">
            <a
              href="#0"
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
            >
              2
            </a>
          </li>
          <li className="mx-1">
            <a
              href="#0"
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
            >
              3
            </a>
          </li>
          <li className="mx-1">
            <a className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
              ...
            </a>
          </li>
          <li className="mx-1">
            <a
              href="#0"
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
            >
              12
            </a>
          </li>
          <li className="mx-1">
            <a
              href="#0"
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PageScrollButton;
