# Generated by Django 4.1.2 on 2023-03-19 06:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('MitosApp', '0004_alter_mitos_dioses_alter_mitos_facciones_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('mitoId', models.AutoField(primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('comentario', models.TextField()),
                ('rating', models.IntegerField(null=True)),
                ('mitos', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MitosApp.mitos')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]