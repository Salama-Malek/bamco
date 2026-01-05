export default function PageLoader() {
    return (
        <div className="fixed inset-0 z-[9999] bg-white/80 backdrop-blur-sm flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">

                {/* Spinner */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                </div>

                {/* Text */}
                <p className="text-sm text-secondary font-medium tracking-wide animate-pulse">
                    جاري التحميل...
                </p>

            </div>
        </div>
    );
}
