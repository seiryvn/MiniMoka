import { Button } from "@/src/components/ui/button"
export function Buttons(props) {
  return <Button onClick={props.onClick} variant="outline"className="w-full text-black text-lg flex gap-1">{props.title}  {props.icon}</Button>
}
