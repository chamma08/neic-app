import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MemberTable = ({ data }) => {
  return (
    <div className="mt-10 border border-border rounded-md">
      <Table>
        <TableHeader>
          <TableRow className="border-border">
            <TableHead>Full Name</TableHead>
            <TableHead>Designation</TableHead>
            <TableHead>Division</TableHead>
            <TableHead>Mobile</TableHead>
            <TableHead>Home</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.members.map((member) => (
            <TableRow key={member._id} className="border-border">
              <TableCell className="font-medium">{member.fullName}</TableCell>
              <TableCell>{member.designation}</TableCell>
              <TableCell>{member.division}</TableCell>
              <TableCell>{member.contactNo.mobile}</TableCell>
              <TableCell>{member.contactNo.home}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>
                <Select className="bg-white ">
                  <SelectTrigger className="border-border">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-border">
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Approved">Approved</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MemberTable;
