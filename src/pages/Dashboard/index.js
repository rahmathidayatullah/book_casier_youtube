import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
} from "recharts";
import IconSearch from "../../assets/icon/search";
import ImgProduct1 from "../../assets/img/listproduct/img1.png";
import ImgEmptyCart from "../../assets/img/empty_cart.png";
import IconDelete from "../../assets/icon/delete";
import { fetchingAllDashboard } from "../../features/dashboard/actions";
import { config } from "../../config";
export default function Dashboard() {
  const dispatch = useDispatch();
  const dashboard = useSelector((state) => state.dashboard);
  console.log("dashboard", dashboard);
  // state pie
  const [activeIndex, setActiveIndex] = useState(0);
  // func pie chart
  const onPieEnter = (_, index) => {
    // this.setState({
    //   activeIndex: index,
    // });
    setActiveIndex(index);
  };
  const dataBar = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  const dataPie = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.titleProduct}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`priceProduct ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  useEffect(() => {
    dispatch(fetchingAllDashboard());
  }, [dispatch]);

  return (
    <div>
      <div className="ml-32 mr-32 pt-9">
        <h2 className="text-xl">Dashboard</h2>
        {/* chart */}
        <div className="grid grid-cols-7 mt-7 gap-5">
          <div className="col-span-7 2xl:col-span-4 shadow-1xl rounded-xl">
            {/* chart bar */}
            <h2 className="text-xl ml-4 mt-4">Daily sales</h2>
            <div className="flex items-center justify-center h-full">
              <BarChart width={730} height={250} data={dashboard?.data.chart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="y" fill="#8884d8" />
                {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
              </BarChart>
            </div>
          </div>
          <div className="col-span-7 2xl:col-span-3 shadow-1xl rounded-xl">
            {/* chart pie */}
            <h2 className="text-xl ml-4 mt-4">Monthly sales</h2>
            <div className="flex items-center justify-center">
              <PieChart width={400} height={400}>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={dashboard?.data?.bestMonth}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="priceProduct"
                  onMouseEnter={onPieEnter}
                />
              </PieChart>
            </div>
          </div>
        </div>
        {/* best seller */}
        <h2 className="text-xl mt-16">Best Seller</h2>
        <div className="grid grid-cols-2 gap-5 mt-6">
          {dashboard.status === "idle"
            ? "idle"
            : dashboard.status === "process"
            ? "process"
            : dashboard.status === "success" &&
              !dashboard.data.bestProduct.length
            ? "data kosong"
            : dashboard.data.bestProduct.map((items, index) => {
                return (
                  <div className="col-span-2 lg:col-span-1">
                    <div className="shadow-1xl p-4 rounded-xl flex items-center relative">
                      {/* img box */}
                      <div className="min-w-78px w-78px h-103px overflow-hidden mr-4">
                        <img
                          className="h-full w-full"
                          src={config.api_image + items.coverImage}
                          alt={`img-card${index}`}
                        />
                      </div>
                      {/* text */}
                      <div>
                        <p className="text-base font-bold">
                          {items.titleProduct}
                        </p>
                        <p className="font-medium text-gray-500 text-sm mt-1">
                          ${items.priceProduct}
                        </p>
                        <p className="font-medium text-green-mantis text-sm mt-8">
                          {items.total_quantity} Unit sold
                        </p>
                      </div>

                      {/* icon delete */}
                      <p className="absolute cursor-pointer top-5 right-5 px-5 py-1 bg-orange-pumpkin text-white font-medium text-lg rounded-md">
                        Top {index + 1}
                      </p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
