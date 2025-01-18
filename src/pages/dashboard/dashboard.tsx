import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
  Cell
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--primary))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

// Add new chart data
const lineChartData = [
  { month: "Jan", sales: 1200 },
  { month: "Feb", sales: 1900 },
  { month: "Mar", sales: 1500 },
  { month: "Apr", sales: 2100 },
  { month: "May", sales: 1800 },
  { month: "Jun", sales: 2400 },
];

const pieChartData = [
  { name: "Desktop", value: 400 },
  { name: "Mobile", value: 300 },
  { name: "Tablet", value: 200 },
];

// Add sample users data
const recentUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/01.png",
    status: "Active",
    joinedDate: "2024-03-20",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "/avatars/02.png",
    status: "Offline",
    joinedDate: "2024-03-19",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    avatar: "/avatars/03.png",
    status: "Active",
    joinedDate: "2024-03-18",
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah@example.com",
    avatar: "/avatars/04.png",
    status: "Active",
    joinedDate: "2024-03-17",
  },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Users</p>
              <h3 className="text-2xl font-bold text-foreground">2,543</h3>
              <p className="text-xs text-green-600 mt-1">+12.5% from last month</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-full">
              <Users className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <h3 className="text-2xl font-bold text-foreground">$45,231</h3>
              <p className="text-xs text-green-600 mt-1">+8.2% from last month</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-full">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Orders</p>
              <h3 className="text-2xl font-bold text-foreground">1,345</h3>
              <p className="text-xs text-red-600 mt-1">-3.2% from last month</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-full">
              <ShoppingCart className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
              <h3 className="text-2xl font-bold text-foreground">3.8%</h3>
              <p className="text-xs text-green-600 mt-1">+4.5% from last month</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-full">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Grid - Updated with smaller heights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Overview Chart */}
        <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
          <h2 className="text-base font-semibold mb-3 text-foreground">Monthly Traffic Overview</h2>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="month" 
                stroke="currentColor" 
                className="text-muted-foreground" 
              />
              <YAxis stroke="currentColor" className="text-muted-foreground" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px',
                  padding: '8px',
                  color: 'hsl(var(--foreground))'
                }} 
              />
              <Legend className="text-muted-foreground" />
              <Bar dataKey="desktop" fill="hsl(var(--primary))" radius={4} name="Desktop" />
              <Bar dataKey="mobile" fill="hsl(var(--primary)/0.7)" radius={4} name="Mobile" />
            </BarChart>
          </ChartContainer>
        </div>

        {/* Sales Overview Chart */}
        <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
          <h2 className="text-base font-semibold mb-3 text-foreground">Sales Overview</h2>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="month" 
                stroke="currentColor" 
                className="text-muted-foreground" 
              />
              <YAxis stroke="currentColor" className="text-muted-foreground" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px',
                  padding: '8px',
                  color: 'hsl(var(--foreground))'
                }} 
              />
              <Legend className="text-muted-foreground" />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                name="Sales"
              />
            </LineChart>
          </ChartContainer>
        </div>

        {/* Device Distribution Chart */}
        <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
          <h2 className="text-base font-semibold mb-3 text-foreground">Device Distribution</h2>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <PieChart>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px',
                  padding: '8px',
                  color: 'hsl(var(--foreground))'
                }}
                formatter={(value: number, name: string) => [
                  `${value} Users`,
                  name
                ]}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
                itemStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Legend 
                className="text-muted-foreground"
                formatter={(value: string) => (
                  <span className="text-muted-foreground">{value}</span>
                )}
              />
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={({ name, value }) => `${name}: ${value}`}
              >
                {pieChartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={`hsl(var(--primary) / ${1 - (index * 0.2)})`}
                    name={entry.name}
                  />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>

        {/* Active Users Chart */}
        <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
          <h2 className="text-base font-semibold mb-3 text-foreground">Active Users</h2>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="month" 
                stroke="currentColor" 
                className="text-muted-foreground" 
              />
              <YAxis stroke="currentColor" className="text-muted-foreground" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px',
                  padding: '8px',
                  color: 'hsl(var(--foreground))'
                }} 
              />
              <Legend className="text-muted-foreground" />
              <Area
                type="monotone"
                dataKey="desktop"
                stackId="1"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary)/0.2)"
                name="Desktop"
              />
              <Area
                type="monotone"
                dataKey="mobile"
                stackId="1"
                stroke="hsl(var(--primary)/0.7)"
                fill="hsl(var(--primary)/0.1)"
                name="Mobile"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>

      {/* Recent Users Table */}
      <div className="bg-card rounded-lg shadow-sm border border-border">
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Recent Users</h2>
          <p className="text-sm text-muted-foreground">A list of recently joined users.</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined Date</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">{user.name}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user.status === 'Active' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                  }`}>
                    {user.status}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {new Date(user.joinedDate).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {user.email}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
