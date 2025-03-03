Next + Prisma + Zod + Supabase + Vercel + StyledComponents
Pattern: Presenter/Container + Server/Client Structure
Architecture: FSD

Deploy: https://history-wheel.vercel.app/
P.s. Supabase может уйти в спячку, нужно сделать restore

Порядок запуска:
1) git clone https://github.com/Ragna13377/history-wheel.git
2) npm install
3) Создание БД в supabase
4) npm run prisma:migrate
5) npm run prisma:seed
6) npm run dev (Доступ на http://localhost:3000)
.env: 
DATABASE_URL="YOUR_DATABASE_URL"
DIRECT_URL="YOUR_DIRECT_URL"
