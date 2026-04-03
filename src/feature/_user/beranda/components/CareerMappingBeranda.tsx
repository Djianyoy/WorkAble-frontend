import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/atoms/button"

const CareerMappingBeranda = () => {
  return (
    <div className="bg-white w-full border border-[#D9D9D9] rounded-3xl space-y-4">
        <div className="space-y-2 bg-secondary p-4 rounded-t-3xl">
          <p className="caption-semibold text-bl-03">
            CAREER MAPPING
          </p>

          <h5 className="title-bold text-white">
            Temukan jalur karier yang tepat untukmu
          </h5>

        </div>

        <div className="grid grid-cols-3 gap-4 p-4">
            <div className="bg-bl-01 rounded-xl border-2 border-secondary text-center p-1">
                <p className="h3-bold text-secondary">
                    20
                </p>
                <p className="caption-regular ">
                    Pertanyaan
                </p>
            </div>
            <div className="bg-bl-01 rounded-xl border-2 border-secondary text-center p-1">
                <p className="h3-bold text-secondary">
                    5-7
                </p>
                <p className="caption-regular ">
                    Menit
                </p>
            </div>
            <div className="bg-bl-01 rounded-xl border-2 border-secondary text-center p-1">
                <p className="h3-bold text-secondary">
                    3
                </p>
                <p className="caption-regular ">
                    Rekomendasi
                </p>
            </div>
        </div>

        <div className="pb-4 px-4">
            <Link href="/career-mapping">
                <Button variant={"lanjut"} size={"lg"}>
                    Mulai Career Mapping
                </Button>
            </Link>
        </div>
    </div>
  )
}

export default CareerMappingBeranda