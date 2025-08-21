from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'Setup/templates/pages' ],  # Adjust path as needed
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',             # Required for admin
                'django.contrib.auth.context_processors.auth',            # Required for admin
                'django.contrib.messages.context_processors.messages',    # Required for admin
                'django.template.context_processors.media',
                'django.template.context_processors.static',
                'django.template.context_processors.tz',
            ],
        },
    },
]


DEBUG = False

ALLOWED_HOSTS = ['localhost', '127.0.0.1', '[::1]']

