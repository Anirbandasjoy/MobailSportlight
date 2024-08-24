/* eslint-disable @typescript-eslint/no-explicit-any */
import WrapNavbar from "@/components/banner/WrapNavbar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFindOrderQuery } from "@/redux/baseApi";
import TimeAgo from "@/shared/TimeAgo";
const MyOrder = () => {
  const { data: orderData } = useFindOrderQuery();
  console.log(orderData);

  return (
    <div>
      <WrapNavbar imageURL="https://images.unsplash.com/photo-1568581789190-ae90a7da930b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className="max-w-4xl mx-auto">
        <h1 className="textxl my-5 font-medium">My order</h1>
        <h2 className="w-full bg-gray-400 h-[1px]"></h2>
        <Table>
          <TableCaption>A list of your recent order.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>OrderId</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Oder create</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderData?.payload?.map((order: any) => (
              <TableRow key={order?._id}>
                <TableCell className="font-medium">{order?._id}</TableCell>
                <TableCell>{order?.status}</TableCell>
                <TableCell>
                  <TimeAgo date={order?.createdAt} />
                </TableCell>
                <TableCell className="text-right">{order?.price} BDT</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">
                {orderData?.payload?.reduce(
                  (a: any, c: any) => a + Number(c?.price),
                  0
                )}{" "}
                BDT
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default MyOrder;
