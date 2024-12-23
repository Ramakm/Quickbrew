import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  BookOpen,
  Youtube,
  FileText,
  PenTool,
  Book,
  User,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface SidebarLinkProps {
  icon: React.ElementType; // For React components like icons
  text: string;
  path: string;
  active?: boolean;
}

const Sidebar: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const { isAuthenticated, user } = useAuth();
  useEffect(() => {
    setUserData(user);
    setIsUserAuthenticated(isAuthenticated);
  }, [userData, isUserAuthenticated]);

  return (
    <>
      {isUserAuthenticated && (
        <div className="w-64 bg-white h-screen fixed border-r">
          <div className="flex items-center gap-2 p-4 mb-6">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold">Quickbrew</span>
          </div>

          <nav className="space-y-1">
            <SidebarLink
              icon={Home}
              text="Dashboard"
              path="/dashboard"
              active
            />
            <SidebarLink
              icon={BookOpen}
              text="Generate Flashcards"
              path="/flashcards"
            />
            <SidebarLink
              icon={Youtube}
              text="Chat with YouTube"
              path="/youtube"
            />
            <SidebarLink icon={FileText} text="Chat with PDF" path="/pdf" />
            <SidebarLink icon={PenTool} text="Instant Notes" path="/notes" />
            <SidebarLink icon={Book} text="Instant Answers" path="/answers" />
          </nav>

          <div className="absolute bottom-0 w-full p-4 border-t">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <Avatar>
                  <AvatarImage
                    src={userData.user_metadata.avatar_url}
                    alt="@shadcn"
                  />
                  <AvatarFallback>{userData.user_metadata.name}</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <p className="font-medium">
                  {userData?.user_metadata?.name || "User"}
                </p>
                <p className="text-sm text-gray-500">Premium Member</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const SidebarLink: React.FC<SidebarLinkProps> = ({
  icon: Icon,
  text,
  path,
  active = false,
}) => {
  return (
    <Link
      to={path}
      className={`flex items-center gap-3 px-4 py-2 text-sm ${
        active
          ? "bg-indigo-50 text-indigo-600"
          : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <Icon className="w-5 h-5" />
      {text}
    </Link>
  );
};

export default Sidebar;
