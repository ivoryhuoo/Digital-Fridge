# utils.py
from pytz import timezone

# Define your local timezone
LOCAL_TIMEZONE = timezone("America/New_York")

def convert_to_local(utc_time):
    if utc_time is None:
        return None
    # Convert UTC to local timezone
    local_time = utc_time.replace(tzinfo=timezone("UTC")).astimezone(LOCAL_TIMEZONE)
    return local_time