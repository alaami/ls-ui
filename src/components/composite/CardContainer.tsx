import { Button } from '@/components/ui/button';
import { Text as UIText } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';
import { CheckCircle } from 'lucide-react-native';
 
export function CardContainer() {
  return (
    <><Card className="w-full max-w-sm">
      <CardHeader className="flex-row">
        <View className="flex-1 gap-1.5">
          <CardTitle>Subscribe to our newsletter</CardTitle>
          <CardDescription>Enter your details to receive updates and tips</CardDescription>
        </View>
      </CardHeader>
      <CardContent>
        <View className="w-full justify-center gap-4">
          <View className="gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" />
          </View>
          <View className="gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="John Doe" />
          </View>
        </View>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">
          <Text>Subscribe</Text>
        </Button>
        <Button variant="outline" className="w-full">
          <Text>Later</Text>
        </Button>
      </CardFooter>
    </Card><Card className="mb-5 bg-white border-0 shadow-lg">
        <CardContent className="p-5">
          <View className="flex-row items-center mb-4">
            <View className="w-10 h-10 bg-green-600 rounded-full items-center justify-center mr-4">
              <CheckCircle size={20} className="text-white" />
            </View>
            <View className="flex-1">
              <UIText className="text-lg font-semibold text-primary mb-1">
                Review
              </UIText>
              <UIText className="text-sm text-muted-foreground">
                Technical assessment in progress
              </UIText>
            </View>
            <Badge className="bg-green-600">
              <UIText className="text-white text-sm font-semibold">
                80%
              </UIText>
            </Badge>
          </View>

          {/* Progress Bar */}
          <View className="ml-14">
            <Progress value={80} className="h-2" />
          </View>
        </CardContent>
      </Card></>
  );
}