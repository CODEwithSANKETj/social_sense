import * as React from "react"
import { CgProfile } from "react-icons/cg";
import { FaArrowUp } from "react-icons/fa";
import {
  Card,
  CardTitle,
} from "@/components/ui/card"

export function CardWithForm() {
  return (
    <Card className="m-3 p-3 w-full h-24 sm:w-full md:w-1/2 lg:w-full xl:w-3/4">
      <div className="flex items-center gap-2">
        <CgProfile className="text-xl" />
        <CardTitle>Create project</CardTitle>
      </div>
      <div className="mt-2">
        <h2>3281</h2>
        <div className="flex items-center">
          <FaArrowUp className="text-sm text-green-500 mr-1" />
          <span>22%</span>
        </div>
      </div>
    </Card>
  )
}
