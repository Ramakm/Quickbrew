CREATE TABLE "profile" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" text,
	"username" text,
	"profile_img" text,
	"plan_name" text DEFAULT 'Free',
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
