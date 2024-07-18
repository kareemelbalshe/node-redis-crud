# استخدم النسخة الأساسية من node
FROM node:alpine

# إنشاء مجلد للعمل
WORKDIR /app

# نسخ ملفات package.json و package-lock.json
COPY package*.json ./

# تثبيت التبعيات
RUN npm install

# نسخ باقي ملفات التطبيق
COPY . .

# فتح البورت المستخدم بواسطة التطبيق
EXPOSE 6000

# تشغيل التطبيق
ENTRYPOINT ["npm", "start"]
