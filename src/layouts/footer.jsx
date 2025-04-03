export const Footer = () => {
    return (
        <footer className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <p className="text-base font-medium text-slate-900 dark:text-slate-50"> © {new Date().getFullYear()} Mikasport All Rights Reserved.</p>
            <div className="flex flex-wrap gap-x-2">
                {" "}
                <a
                    href="#"
                    className="link"
                >
                    Privacy Policy
                </a>
                <a
                    href="#"
                    className="link"
                >
                    Terms of Services
                </a>
            </div>
        </footer>
    );
};
