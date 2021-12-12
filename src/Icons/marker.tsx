import { SVGProps, Ref, forwardRef, memo, ReactElement } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
}

const SvgComponent = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
): ReactElement => (
  <svg
    width='8px'
    height='8px'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={4} cy={4} r={4} fill='#FFBA08' />
  </svg>
)

const ForwardRef = forwardRef(SvgComponent)
const MarkerIcon = memo(ForwardRef)
export default MarkerIcon
