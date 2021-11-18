declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.jpg" {
  const url: string;
  export default url
}
declare module "*.png" {
  const url: string;
  export default url
}
declare module "*.svg" {
  const url: string;
  export default url
}
declare module "*.webp" {
  const url: string;
  export default url
}