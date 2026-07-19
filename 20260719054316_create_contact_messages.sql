/*
# Create contact_messages table (single-tenant, no auth)

1. Purpose
   Stores enquiries submitted through the portfolio contact form.
   The site has no sign-in screen, so the anon-key client must be able to INSERT.
   Reads are intentionally public/shared for the site owner to review messages.

2. New Tables
   - `contact_messages`
     - `id` (uuid, primary key)
     - `name` (text, not null) — sender's name
     - `email` (text, not null) — sender's email
     - `phone` (text, nullable) — optional phone number
     - `message` (text, not null) — the enquiry body
     - `created_at` (timestamptz, default now())

3. Security
   - Enable RLS on `contact_messages`.
   - Allow anon + authenticated INSERT (anyone can submit the contact form).
   - Allow anon + authenticated SELECT (single-tenant, intentionally shared so the
     owner can read submissions through the same anon-key client).
   - No UPDATE / DELETE policies: messages are append-only.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_contact_messages" ON contact_messages;
CREATE POLICY "anon_select_contact_messages" ON contact_messages FOR SELECT
  TO anon, authenticated USING (true);
